<template>
  <div class="bridge">
    <!-- Status -->
    <div class="status">
      j:{{ status.jumps }} f:{{ status.fuel }} hp:{{ status.hp }} g:{{
        status.guns
      }}
      e:{{ status.engine }} k:{{ status.kills }}
    </div>

    <div class="" v-if="status.dead">
      {{ status.dead.reason }} after {{ status.jumps }} jumps.
    </div>

    <div v-if="!status.dead">
      <!-- Jump button -->
      <div>
        <a href="#" v-if="canJump" @click.prevent="jump">activate jump drive</a>
      </div>

      <!-- Ships in range -->
      <div v-if="area.ship">
        <p>Ship in range</p>
        <p>{{ area.ship.guns }}g, {{ area.ship.hp }}hp</p>
        <p>
          <a href="#" @click.prevent="attack">attack</a>
          <span v-if="status.engaged">
            |
            <a href="#" @click.prevent="evade"> break off the attack</a></span
          >
        </p>
      </div>
    </div>

    <!-- Highscores -->
    <div class="highscores">
      hs/ j:{{ this.highscore.jumps }} k:{{ this.highscore.kills }}
    </div>
  </div>
</template>

<script>
import Area from '../engine/Area'
import Dice from '../engine/Dice'

export default {
  name: 'Bridge',

  data() {
    return {
      status: {
        jumps: 0,
        kills: 0,
        fuel: 10,
        hp: 10,
        guns: 6,
        engine: 6,
        engaged: false,
        dead: false,
      },
      highscore: {
        jumps: 0,
        kills: 0,
      },
      area: {
        ship: null,
      },
    }
  },

  computed: {
    canJump() {
      // Can't jump if fuel is out or engaged by an enemy
      return this.status.fuel > 0 && this.status.engaged !== true
    },
  },

  methods: {
    log(msg) {
      console.log(msg)
    },

    jump() {
      this.status.jumps++

      // Logic
      const area = new Area()

      // About 66% chance of running into a ship
      if (new Dice(6).roll() > 2) {
        this.area.ship = area.generateRandomShip()
      } else {
        this.area.ship = null
      }

      this.burnFuel(1)
      this.hs('jumps')
    },

    attack() {
      if (!this.status.engaged) {
        this.engage()
      }

      this.playerTurn()
      if (this.area.ship) this.enemyTurn()
    },

    playerTurn() {
      this.log('Player turn')
      const hp = this.area.ship.hp
      const dmg = new Dice(this.status.guns).roll()

      this.log(`Dealt ${dmg} damage`)
      this.area.ship.hp = hp - dmg

      if (this.area.ship.hp <= 0) {
        this.kill()
      }
    },

    kill() {
      this.disengage()
      this.status.kills++

      // Roll to capture fuel
      const f = new Dice(this.area.ship.fuel).roll()
      this.addFuel(f)

      // Clear foe
      this.area.ship = null

      // Highscore?
      this.hs('kills')
    },

    enemyTurn() {
      this.log('Enemy turn')
      const hp = this.status.hp
      const dmg = new Dice(this.area.ship.guns).roll()

      this.log(`Received ${dmg} damage`)
      this.status.hp = hp - dmg

      if (this.status.hp <= 0) {
        this.die('Blown up by an enemy vessel')
      }
    },

    engage() {
      this.status.engaged = true
      this.log('engaging enemy')
    },

    disengage() {
      this.status.engaged = false
      this.log('disengaged')
    },

    evade() {
      // Roll engine against the enemy
      if (
        new Dice(this.status.engine).roll() >=
        new Dice(this.area.ship.engine).roll()
      ) {
        // Escapes
        this.disengage()
      } else {
        // Foe gets a free shot
        this.log('failed to disengage')
        this.enemyTurn()
      }

      // Consume fuel
      this.burnFuel(1)
    },

    burnFuel(qty = 1) {
      this.status.fuel = this.status.fuel - qty

      if (this.status.fuel <= 0) {
        this.die('Ran out of fuel')
      }
    },

    addFuel(qty) {
      this.status.fuel = this.status.fuel + qty
      this.log(`Added ${qty}t of fuel`)
    },

    die(reason) {
      this.status.dead = { reason }
    },

    // Highscore
    hs(metric) {
      if (this.status[metric] > this.highscore[metric]) {
        this.highscore[metric] = this.status[metric]
      }

      window.localStorage.setItem('highscore', JSON.stringify(this.highscore))
    },
  },

  created() {
    const lshs = window.localStorage.getItem('highscore')
    if (lshs) {
      const hs = JSON.parse(lshs)

      this.highscore.jumps = hs.jumps
      this.highscore.kills = hs.kills
    }
  },
}
</script>

<style scoped lang="scss">
.highscores {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: #777;
}
</style>
