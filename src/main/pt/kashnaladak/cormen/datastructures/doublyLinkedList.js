
Kash.namespace('Kash.cormen.datastructures');

Kash.cormen.datastructures.DoublyLinkedList = function(){
    var _head = null;
    var _tail = null;

    function Element(value, next, prev){
        return {
            'value': value,
            'next': next,
            'prev': prev
        }
    }

    function _isEmpty(){
        return _.isNull(_head);
    }

    function _search(value){
        for(var elem = _head; !_.isNull(elem) && !_.isEqual(elem.value, value); elem = elem.next){}
        return elem;
    }

    function _insert(value){
        var elem = new Element(value, null, _tail);
        _tail = elem;
        if(!_.isNull(elem.prev)){
            elem.prev.next = elem
        }
        if(_.isNull(_head)){
            _head = elem;
        }
    }

    function _remove(value){
        var elem = _search(value);
        if(!_.isNull(elem)){
            if(_.isEqual(elem, _head)){
                _head = elem.next;
            }
            else {
                elem.prev.next = elem.next;
            }
            if(_.isEqual(elem, _tail)){
                _tail = elem.prev;
            }
            else {
                elem.next.prev = elem.prev;
            }
        }
        else {
            throw "No element found for value: " + value;
        }
    }

    return {
        isEmpty: _isEmpty,
        search: _search,
        insert: _insert,
        remove: _remove
    }
};

