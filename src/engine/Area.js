import Ship from './Ship'
import Dice from './Dice'
import Lottery from './Lottery'
import shipList from './data/ships'

export default class Area {
  ship = null

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
  }

  generateShip() {
    return new Ship(shipList[this.shipLottery.getWinner()])
  }

  generateRandomShip() {
    return new Ship({
      guns: this.d6.roll(),
      hp: this.d20.roll(),
      fuel: this.d8.roll(),
      engine: this.d6.roll(),
      scrap: this.d6.roll(),
    })
  }
}
