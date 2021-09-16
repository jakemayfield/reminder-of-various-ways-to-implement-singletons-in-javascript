const SingletonClassC = require('../singleton-class-c');

test('SingletonClassC is a singleton class', () => {
    const instanceOne = new SingletonClassC('Person C');
    const instanceTwo = new SingletonClassC('Person D');
    expect(instanceOne === instanceTwo).toEqual(true);
    expect(instanceTwo.getName()).toEqual('Person C');
});