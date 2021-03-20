<template>
  <div class="bridge">
    <!-- Status -->
    <div class="status">
      j:{{ status.jumps }} f:{{ status.fuel }} hp:{{ status.hp }}/{{
        status.maxHp
      }}
      s:{{ status.scrap }} g:{{ status.guns }} k:{{ status.kills }}
    </div>

    <div class="" v-if="status.dead">
      <p>{{ status.dead.reason }} after {{ status.jumps }} jumps.</p>
      <p><a href="#" @click.prevent="start">again</a></p>
    </div>

    <div v-else>
      <!-- Ship controls -->
      <div class="controls">
        <a href="#" v-if="canJump" @click.prevent="jump">activate jump drive</a>
        <a href="#" v-if="canRepair" @click.prevent="repair"
          >patch up the hull</a
        >
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

      <!-- Base -->
      <div v-if="area.base">There's a lonely {{ area.base.type }} here</div>

      <!-- Logs -->
      <ul class="logs">
        <li v-for="(l, k) in logs" :key="k">
          {{ l }}
        </li>
      </ul>
    </div>

    <!-- Highscores -->
    <div class="highscores">
      h/s j:{{ this.highscore.jumps }} k:{{ this.highscore.kills }}
    </div>
  </div>
</template>

<script>
import Area from '../engine/Area'
import Dice from '../engine/Dice'
import Player from '../engine/Player'

export default {
  name: 'Bridge',

  data() {
    return {
      status: {}, // Player
      highscore: {
        jumps: 0,
        kills: 0,
      },
      area: {}, // Area
      logs: [],
    }
  },

  computed: {
    canJump() {
      // Can't jump if fuel is out or engaged by an enemy
      return this.status.fuel > 0 && this.status.engaged !== true
    },

    canRepair() {
      // Can't repair if not enough scrap or hull at full health
      return (
        this.status.scrap >= 5 &&
        this.status.hp < 10 &&
        this.status.engaged !== true
      )
    },
  },

  methods: {
    log(msg) {
      this.logs.push(msg)
    },

    start() {
      this.status = new Player()
      this.area = {}
    },

    jump() {
      this.status.jumps++

      // Generate a new area
      this.area = new Area()
      this.logs = []

      this.burnFuel(1)
      this.hs('jumps')
    },

    repair() {
      this.status.scrap = this.status.scrap - 5
      this.status.hp++
      if (this.status.hp === this.status.maxHp) {
        this.log('Good as new')
      } else {
        this.log('Makeshift repairs make poor use of materials')
      }
    },

    attack() {
      if (!this.status.engaged) {
        this.log('Matched orbits')
        this.engage()
      }

      this.playerTurn()
      if (this.area.ship) this.enemyTurn()
    },

    playerTurn() {
      const hp = this.area.ship.hp
      const dmg = new Dice(this.status.guns + 1).roll() - 1

      this.area.ship.hp = hp - dmg

      if (this.area.ship.hp <= 0) {
        this.kill()
      }
    },

    kill() {
      this.disengage()
      this.status.kills++

      this.log('Enemy vessel destroyed')

      // Roll to capture fuel
      this.addFuel(new Dice(this.area.ship.fuel).roll())

      // Roll to capture scrap
      this.addScrap(new Dice(this.area.ship.scrap).roll())

      // Clear foe
      this.area.ship = null

      // Highscore?
      this.hs('kills')
    },

    enemyTurn() {
      const hp = this.status.hp
      const dmg = new Dice(this.area.ship.guns + 1).roll() - 1

      this.status.hp = hp - dmg

      if (this.status.hp <= 0) {
        this.die('Blown up by an enemy vessel')
      }
    },

    engage() {
      this.status.engaged = true
    },

    disengage() {
      this.status.engaged = false
    },

    evade() {
      // Roll engine against the enemy
      if (
        new Dice(this.status.engine).roll() >=
        new Dice(this.area.ship.engine).roll()
      ) {
        // Escapes
        this.disengage()
        this.log('Moved out of enemy range')
      } else {
        // Foe gets a free shot
        this.log('Evasion failed')
        this.enemyTurn()
      }
    },

    burnFuel(qty = 1) {
      this.status.fuel = this.status.fuel - qty

      if (this.status.fuel <= 0) {
        this.die('Ran out of fuel')
      }
    },

    addFuel(qty) {
      if (qty <= 0) return
      this.status.fuel = this.status.fuel + qty
      this.log(`Reclaimed ${qty}t of fuel`)
    },

    addScrap(qty) {
      if (qty <= 0) return
      this.status.scrap = this.status.scrap + qty
      this.log(`Picked up ${qty}t of scrap materials`)
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
    this.start()

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
.status {
  height: 3rem;
}

.controls {
  height: 3rem;

  a {
    margin-left: 1rem;
  }

  a:first-child {
    margin-left: 0;
  }
}

.logs {
  color: #ddd;
  padding-left: 0;

  li {
    list-style: none;
  }
}

.highscores {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: #777;
}
</style>
