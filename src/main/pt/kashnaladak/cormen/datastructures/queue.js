
Kash.namespace('Kash.cormen.datastructures');

Kash.cormen.datastructures.Queue = function(){
    var clazz = Kash.cormen.datastructures.Queue;
    var innerArray = [];

    clazz.prototype._enqueue = function(elem) {
        if(_.isUndefined(elem)){
            throw new Error("Unable to enqueue undefined element.");
        }
        innerArray.push(elem);
    }

    clazz.prototype._dequeue = function(){
        if(this.isEmpty()){
            throw new Error("Unable to dequeue an emtpy queue.");
        }
        return innerArray.shift();
    }

    clazz.prototype._isEmpty = function(){
        return innerArray.length == 0
    }

    return {
        enqueue: clazz.prototype._enqueue,
        dequeue: clazz.prototype._dequeue,
        isEmpty: clazz.prototype._isEmpty
    }
}

