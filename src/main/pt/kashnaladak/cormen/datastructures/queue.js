
Kash.namespace('Kash.cormen.datastructures');

Kash.cormen.datastructures.Queue = function(){
    var innerArray = [];

    return {
        enqueue: function(elem) {
            if(_.isUndefined(elem)){
                throw new Error("Unable to enqueue undefined element.");
            }
            innerArray.push(elem);
        },
        dequeue: function(){
            if(this.isEmpty()){
                throw new Error("Unable to dequeue an emtpy queue.");
            }
            return innerArray.shift();
        },
        isEmpty: function(){
            return innerArray.length == 0
        }
    }
}

