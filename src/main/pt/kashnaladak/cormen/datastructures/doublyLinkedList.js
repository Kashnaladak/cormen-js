
Kash.namespace('Kash.cormen.datastructures');

Kash.cormen.datastructures.DoublyLinkedList = function(){
    var _head = null;

    function Element(elem, next, prev){
        var _elem = elem;
        var _next = next;
        var _prev = prev;

        return {
            getElem: function(){
                return elem;
            },
            setNext: function(next){
                _next = next;
            },
            getNext: function(){
                return _next;
            },
            setPrev: function(){
                _prev = prev;
            },
            getPrev: function(){
                return _prev;
            }
        }
    }

    return {
        isEmpty: function(){
            return _.isNull(head);
        },
        search: function(elem){
            var x = _head;
            while(!_.isNull(x) && !_.isEqual(x.getElem(), elem)){
                x = x.getNext();
            }
            return x;
        }
    }
}

