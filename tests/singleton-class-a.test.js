const SingletonClassA = require('../singleton-class-a');

// This does not work because you cannot use the constructor on a static
// method:
// const instance2 = new SingletonClassA('2').getInstance();

// This does not work it will create an entirely new class instance since
// it is not using the static getInstance() method:
// const instance2 = new SingletonClassA('Person B');

test('SingletonClassA is a singleton class', () => {
    const instance1 = SingletonClassA.getInstance('Person A');
    const instance2 = SingletonClassA.getInstance('Person B');
    expect(instance1 === instance2).toEqual(true);
    expect(instance1.getName()).toEqual('Person A');
});