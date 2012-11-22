DoublyLinkedListTest = TestCase("DoublyLinkedListTest");

DoublyLinkedListTest.prototype.testSimpleDoublyLinkedList = function() {
    var dll = new Kash.cormen.datastructures.DoublyLinkedList();
    assertObject(dll);
};

DoublyLinkedListTest.prototype.testIsEmptyDoublyLinkedList = function() {
    var dll = new Kash.cormen.datastructures.DoublyLinkedList();
    assertTrue(dll.isEmpty());
};