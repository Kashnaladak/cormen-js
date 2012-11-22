
Kash.namespace('Kash.cormen.datastructures');

Kash.cormen.datastructures.DoublyLinkedList = function(){
    var head = null;

    return {
        isEmpty: function(){
            return _.isNull(head);
        }
    }
}

