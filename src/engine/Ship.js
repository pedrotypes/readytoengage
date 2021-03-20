export default class Ship {
  name = ''
  type = ''
  model = ''
  guns = 0
  engine = 0
  hp = 0
  fuel = 0
  scrap = 0

  constructor(s = {}) {
    this.name = s.name
    this.type = s.type
    this.model = s.model
    this.guns = s.guns
    this.engine = s.engine
    this.hp = s.hp
    this.fuel = s.fuel
    this.scrap = s.scrap
  }
}
