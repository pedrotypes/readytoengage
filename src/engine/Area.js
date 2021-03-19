import Ship from './Ship'
import Dice from './Dice'
import Lottery from './Lottery'
import shipList from './data/ships'

export default class Area {
  constructor() {
    const lottery = new Lottery()

    // Load up all ship into the lottery
    for (const type in shipList) {
      lottery.addEntry({
        participant: type,
        lots: shipList[type].chance,
      })
    }

    this.lottery = lottery
    this.d6 = new Dice(6)
    this.d8 = new Dice(8)
    this.d20 = new Dice(20)
  }

  generateShips(max = 3) {
    const ships = []

    // Decide how many ships we have
    const qty = new Dice(max).roll() - 1 // max 3 ships
    for (let i = 0; i < qty; i++) {
      ships.push(this.generateShip())
    }

    return ships
  }

  generateShip() {
    return new Ship(shipList[this.lottery.getWinner()])
  }

  generateRandomShip() {
    return new Ship({
      guns: this.d6.roll(),
      hp: this.d20.roll(),
      fuel: this.d8.roll(),
      engine: this.d6.roll(),
    })
  }
}
