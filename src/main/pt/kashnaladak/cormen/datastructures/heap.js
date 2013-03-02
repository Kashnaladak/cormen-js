
Kash.namespace('Kash.cormen.datastructures');

/**
 * Heap will operate on an array of objects with one entry
 */

Kash.cormen.datastructures.Heap = function(compare){
    var clazz = Kash.cormen.datastructures.Heap;
    var _array = [];

    if(_.isUndefined(compare)){
        compare = function(a,b){
            return a > b;
        }
    }
    else if(!_.isFunction(compare)){
        throw new Error("Argument 'compare' is not a function.");
    }


    clazz.prototype._parent = function(i) {
        return Math.ceil(i/2) - 1;
    }
    clazz.prototype._left = function(i) {
        return 2 * i + 1;
    }
    clazz.prototype._right = function(i) {
        return 2 * i + 2;
    }


    clazz.prototype._heapify = function(rootIndex) {
        var leftIndex = clazz.prototype._left(rootIndex);
        var rightIndex = clazz.prototype._right(rootIndex);
        var indexOfLargest;

        if(leftIndex < _array.length){
            indexOfLargest = compare(_array[leftIndex], _array[rootIndex]) ? leftIndex : rootIndex;
            indexOfLargest = compare(_array[rightIndex], _array[indexOfLargest]) ? rightIndex : indexOfLargest;

            if(indexOfLargest != rootIndex){
                var aux = _array[rootIndex];
                _array[rootIndex] = _array[indexOfLargest];
                _array[indexOfLargest] = aux;

                clazz.prototype._heapify(indexOfLargest);
            }
        }
    }



    clazz.prototype._buildHeap = function(array, concat) {
        if(concat){
            _array.concat(array);
        }
        else {
            _array = array;
        }

        for(var i = Math.floor(_array.length/2) - 1 ; i >= 0 ; i--){
            clazz.prototype._heapify(i);
        }
    }

    clazz.prototype._insert = function(i){
        function bubbleUp(index){
            if(index > 0){
                var parentIndex = clazz.prototype._parent(index);

                if(compare(_array[index], _array[parentIndex])){
                    var aux = _array[parentIndex];
                    _array[parentIndex] = _array[index];
                    _array[index] = aux;
                    bubbleUp(parentIndex);
                }
            }
        }

        _array[_array.length] = i;
        bubbleUp(_array.length - 1);
    }

    clazz.prototype._poll = function(){
        if(_array.length < 1){
            throw new Error("Heap underflow.");
        }
        var max = _array[0];

        _array[0] = _array[_array.length-1];
        clazz.prototype._heapify(0);

        return max;
    }

    clazz.prototype._peek = function(){
        return _array[0];
    }

    clazz.prototype._isEmpty = function(){
        return _array.length == 0;
    }

    clazz.prototype._size = function(){
        return _array.length;
    }

    clazz.prototype._remove = function(i){
        throw new Error("Not implemented")
    }


    return {
        buildHeap: clazz.prototype._buildHeap,
        isEmpty: clazz.prototype._isEmpty,
        peek: clazz.prototype._peek,
        poll: clazz.prototype._poll,
        insert: clazz.prototype._insert,
        remove: clazz.prototype._remove,
        size: clazz.prototype._size
    }
}

