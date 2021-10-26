<template>
  <div class="combat">
    <h1>Combat</h1>

    <div v-for="(ship, i) in ships" :key="i">
      <h3>{{ ship.name }}</h3>
      <ul>
        <li v-for="(slot, s) in ship.slots" :key="s">
          <div v-if="slot.type === 'hull'">
            Hull:
            <!-- eslint-disable -->
            <span v-for="x in 10">●</span>
            <span v-for="x in slot.max - slot.current">○</span>
            <!-- eslint-enable -->
          </div>

          <div v-else-if="slot.type === 'weapon'">
            <!-- Player weapon -->
            <div v-if="ship.type === 'player'">
              <a href="#" @click.prevent="aim(slot)">{{ slot.name }}</a>
              <span v-if="slot.aiming">...</span>
            </div>

            <!-- Mob weapon -->
            <div v-else>
              <span
                :class="{ targettable: aiming.state }"
                @click="
                  if (aiming.state) {
                    aim(slot)
                  }
                "
                >{{ slot.name }}</span
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Combat',
  components: {},
  data() {
    return {
      aiming: {
        state: false,
        source: null,
        target: null,
      },
      player: {
        type: 'player',
        name: 'October Felix',
        slots: {
          hull: { type: 'hull', max: 20, current: 15 },
          weapon1: {
            type: 'weapon',
            name: 'Missile Launcher',
            aiming: false,
            damage: {
              hull: 5,
            },
            ammo: 4,
          },
        },
      },
      oponent: {
        type: 'mob',
        name: 'Linear Sequence of Scares',
        slots: {
          hull: { type: 'hull', max: 10, current: 10 },
          weapon1: {
            type: 'weapon',
            name: 'Kinetic Cannon',
            aiming: false,
            damage: {
              hull: 2,
            },
            ammo: 10,
          },
        },
      },
      ships: [],
    }
  },
  methods: {
    aim(slot) {
      if (!slot.aiming) {
        console.log('Aiming')
        slot.aiming = true
        this.aiming.state = !this.aiming.state
        this.aiming.source = slot
      } else {
        if (slot === this.aiming.source) {
          this.aiming.source.aiming = false
          this.aiming.source = null
        } else {
          this.aiming.target = slot
          console.log('Targetting')
        }
        this.aiming.state = false
      }
    },
  },
  created() {
    this.ships = [this.player, this.oponent]
  },
}
</script>

<style lang="scss">
.targettable {
  color: teal;
  cursor: pointer;
}
</style>
