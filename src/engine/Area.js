import Ship from './Ship'
import Dice from './Dice'
import Lottery from './Lottery'
import shipList from './data/ships'

export default class Area {
  ship = null
  base = false

  constructor() {
    // Create a lottery for ships
    this.shipLottery = new Lottery()
    for (const type in shipList) {
      this.shipLottery.addEntry({
        participant: type,
        lots: shipList[type].chance,
      })
    }

    // Create standard dice
    this.d4 = new Dice(4)
    this.d6 = new Dice(6)
    this.d8 = new Dice(8)
    this.d10 = new Dice(10)
    this.d12 = new Dice(12)
    this.d20 = new Dice(20)

    // Populate with mobs and NPCs
    this.populate()
  }

  populate() {
    // About 66% chance of running into a ship
    if (new Dice(6).roll() > 2) {
      this.ship = this.generateRandomShip()
    } else {
      this.ship = null
    }

    // If no ship, maybe there's a base
    if (!this.ship && this.d12.roll() === 12) {
      const lottery = new Lottery()

      lottery.addEntry({ participant: 'Deep Space Installation', lots: 10 })
      lottery.addEntry({ participant: 'Mining Outpost', lots: 10 })
      lottery.addEntry({ participant: 'Research Vessel', lots: 10 })
      lottery.addEntry({ participant: 'Planet', lots: 10 })
      lottery.addEntry({ participant: 'Asteroid Base', lots: 10 })
      lottery.addEntry({ participant: 'Space Station', lots: 10 })

      this.base = { type: lottery.getWinner() }
    }
  }

  generateShip() {
    return new Ship(shipList[this.shipLottery.getWinner()])
  }

  generateRandomShip() {
    const hp = this.d20.roll()

    // Bigger hulls can yield better rewards
    let rewardDie = 4
    if (hp >= 8) rewardDie = 6
    if (hp >= 12) rewardDie = 8

    return new Ship({
      guns: this.d6.roll(),
      hp,
      fuel: rewardDie - 3,
      engine: this.d6.roll(),
      scrap: rewardDie,
    })
  }
}
