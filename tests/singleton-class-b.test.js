const SingletonClassB = require('../singleton-class-b');

test('SingletonClassB is a singleton class', () => {
    const instanceOne = new SingletonClassB('Person B');
    const instanceTwo = new SingletonClassB('Person C');
    expect(instanceOne === instanceTwo).toEqual(true);
    expect(instanceTwo.getName()).toEqual('Person B')
});