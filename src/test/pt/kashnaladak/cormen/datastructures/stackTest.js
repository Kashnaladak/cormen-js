StackTest = TestCase("StackTest");

StackTest.prototype.testSimpleStack = function() {
    var stack = new Kash.cormen.datastructures.Stack();
    assertObject(stack);
};

StackTest.prototype.testStackPush = function() {
    //Create a new stack
    var stack = new Kash.cormen.datastructures.Stack();

    //No element; should throw exception
    assertException(
        function(){
            stack.push();
        }
    );

    //Push an element into the stack
    stack.push(1);

    //Check that the stack is now not empty
    assertFalse(stack.isEmpty());

    //Pop the element and make sure it is equal to what we pushed
    assertEquals(1, stack.pop());
};

StackTest.prototype.testStackPop = function(){
    var stack = new Kash.cormen.datastructures.Stack();

    assertException(
        function(){
            stack.pop(); //Empty stack; should throw exception
        }
    );
}
