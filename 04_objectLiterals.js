class Hero {
  /**
   * @param {Object} params
   * @param {string} params.name
   * @param {string} params.type
   */
  constructor({ name, type }) {
    this.name = name;      
    this.type = type;
  }

  Attack() {
    const heroTypes = {
      wizard: "magic",
      warrior: "sword",
      monk: "arts",
      default: "shuriken",
    };
    const heroType = heroTypes[this.type] || heroTypes.default;
    console.log(`${this.name} the ${this.type} attacked using ${heroType}`);
  }
}

const heroOne = new Hero({
  name: "Carlos",
  type: "ninja",
});

heroOne.Attack();
