const { Singletons } = require('./singletons');

class SingletonClassC {

  constructor(name) {

    // Assign this class instance a key name.
    const key = 'SingletonClassC';

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
