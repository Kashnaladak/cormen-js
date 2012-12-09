
Kash.namespace('Kash.cormen.datastructures');

Kash.cormen.datastructures.Stack = function(){
    var clazz = Kash.cormen.datastructures.Stack;
    var innerArray = [];

    clazz.prototype._push = function(elem){
        if(_.isUndefined(elem)){
            throw new Error("Unable to push undefined element.");
        }
        innerArray.push(elem);
    }

    clazz.prototype._pop = function(){
        if(this.isEmpty()){
            throw new Error("Unable to pop an emtpy stack.");
        }
        return innerArray.pop();
    }

    clazz.prototype._isEmpty = function(){
        return innerArray.length == 0
    }

    return {
        push: clazz.prototype._push,
        pop: clazz.prototype._pop,
        isEmpty: clazz.prototype._isEmpty
    }
}

