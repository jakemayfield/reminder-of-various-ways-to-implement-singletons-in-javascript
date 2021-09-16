const SingletonClassD = require('../singleton-class-d');

test('SingletonClassD is a singleton class', () => {
    const instanceOne = SingletonClassD;
    instanceOne.setName('Person D');
    const instanceTwo = SingletonClassD;
    expect(instanceOne === instanceTwo).toEqual(true);
    expect(instanceTwo.getName()).toEqual('Person D');
});