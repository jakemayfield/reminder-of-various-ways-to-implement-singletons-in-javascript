const { Singletons } = require('./singletons');

class SingletonClassC {

  constructor(name) {
    if (this.instance) {
      return SingletonClassB.instance;
    }

    // Assign this class instance a key.
    const key = 'singletonClassC';

    // Load object from Singletons by key if it exist.
    if (key in Singletons) {
      return Singletons[key];
    }

    this.name = name;

    // Create instance and store it to Singletons object.
    Singletons[key] = this;

  }

  getName() {
    return this.name;
  }

}

module.exports = SingletonClassC;