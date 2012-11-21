StackTest = TestCase("StackTest");

StackTest.prototype.testSimpleStack = function() {
    var stack = new Kash.cormen.datastructures.Stack();
    assertObject(stack);
};

StackTest.prototype.testStackPush = function() {
    var stack = new Kash.cormen.datastructures.Stack();

    assertException(
        function(){
            stack.push(); //No element; should throw exception
        }
    );
};

StackTest.prototype.testStackPop = function(){
    var stack = new Kash.cormen.datastructures.Stack();

    assertException(
        function(){
            stack.pop(); //Empty stack; should throw exception
        }
    );
}
