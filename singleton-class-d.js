class SingletonClassD {

  constructor() {

    this.name = null;

  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

}

module.exports = new SingletonClassD;