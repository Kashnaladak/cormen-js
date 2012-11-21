CoreTest = TestCase("CoreTest");

CoreTest.prototype.testKashObjectExists = function() {
    assertObject(Kash);
    assertFunction(Kash.namespace);
};

CoreTest.prototype.testNamespaceFunction = function() {
    assertFunction(Kash.namespace);

    Kash.namespace('Kash.test','T');
    assertObject(Kash.test);
    assertObject(T);
};
