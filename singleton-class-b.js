class SingletonClassB {

  constructor(name) {
    if (!!SingletonClassB.instance) {
      return SingletonClassB.instance;
    }
    SingletonClassB.instance = this;
    this.name = name;
    return this;
  }

  getName() {
    return this.name;
  }

}

module.exports = SingletonClassB;