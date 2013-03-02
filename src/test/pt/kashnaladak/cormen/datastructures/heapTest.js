HeapTest = TestCase("HeapTest");


HeapTest.prototype.testHeap = function() {
    var heap = new Kash.cormen.datastructures.Heap();

    heap.buildHeap([16,14,10,8,7,9,3,2,4,1]);
    heap.insert(500);

};
