QueueTest = TestCase("QueueTest");

QueueTest.prototype.testSimpleStack = function() {
    var queue = new Kash.cormen.datastructures.Queue();
    assertObject(queue);
};

QueueTest.prototype.testStackPush = function() {
    var queue = new Kash.cormen.datastructures.Queue();

    assertException(
        function(){
            queue.enqueue(); //No element; should throw exception
        }
    );
};

QueueTest.prototype.testStackPop = function(){
    var queue = new Kash.cormen.datastructures.Queue();

    assertException(
        function(){
            queue.dequeue(); //Empty stack; should throw exception
        }
    );
}
