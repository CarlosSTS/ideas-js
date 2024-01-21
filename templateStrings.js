class Hero {
  constructor(name, age, type) {
    this.name = name,
    this.age = age,
    this.type = type
  }

  Attack() {
    switch (this.type) {
      case 'wizard':
        console.log(`${this.name} the ${this.type} attacked using magic`);
        break;
      case 'warrior':
        console.log(`${this.name} the ${this.type} attacked using sword`);
        break;
      case 'monk':
        console.log(`${this.name} the ${this.type} attacked using martial arts`);
        break;
      default:
        console.log(`${this.name} the ${this.type} attacked using shuriken`);
        break;
    }
  }
}

const heroOne = new Hero('Carlos', 25, 'wizard');

heroOne.Attack();