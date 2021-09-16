class SingletonClassA {

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  static getInstance(name) {
    if (!this.instance) {
      this.instance = new SingletonClassA(name);
    }
    return this.instance;
  }

}

module.exports = SingletonClassA;