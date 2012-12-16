DoublyLinkedListTest = TestCase("DoublyLinkedListTest");



DoublyLinkedListTest.prototype.testCreateDoublyLinkedList = function() {
    var dll = new Kash.cormen.datastructures.DoublyLinkedList();
    assertObject(dll);
    assertFunction(dll.isEmpty);
    assertFunction(dll.insert);
    assertFunction(dll.remove);
};

DoublyLinkedListTest.prototype.testIsEmptyDoublyLinkedList = function() {
    var dll = new Kash.cormen.datastructures.DoublyLinkedList();
    assertTrue(dll.isEmpty());
};

DoublyLinkedListTest.prototype.testSearchDoublyLinkedList = function() {
    var dll = new Kash.cormen.datastructures.DoublyLinkedList();
    assertNull(dll.search('this is not on the list'));
};

DoublyLinkedListTest.prototype.testInsertDoublyLinkedList = function() {
    var dll = new Kash.cormen.datastructures.DoublyLinkedList();
    dll.insert(1);
    assertFalse(dll.isEmpty());

    var elem = dll.search(1);
    assertNull(elem.next);
    assertNull(elem.prev);
    assertEquals(elem.value, 1);

    dll.insert(2);
    var elem2 = dll.search(2);
    assertNull(elem2.next);
    assertNotNull(elem2.prev);
    assertEquals(elem2.prev, elem);
    assertEquals(elem.next, elem2);
};

DoublyLinkedListTest.prototype.testRemoveDoublyLinkedList = function() {
    var dll = new Kash.cormen.datastructures.DoublyLinkedList();

    assertException(function(){
        dll.remove(1);
    });

    dll.insert(1);
    dll.remove(1);
    assertTrue(dll.isEmpty());

    dll.insert(1);
    dll.insert(2);
    dll.remove(1);
    assertNull(dll.search(1));

    var elem = dll.search(2);
    assertNull(elem.prev);
    assertNull(elem.next);
};