
Kash.namespace('Kash.cormen.datastructures');

Kash.cormen.datastructures.Stack = function(){
    var innerArray = [];

    return {
        push: function(elem){
            if(_.isUndefined(elem)){
                throw new Error("Unable to push undefined element.");
            }
            innerArray.push(elem);
        },
        pop: function(){
            if(this.isEmpty()){
                throw new Error("Unable to pop an emtpy stack.");
            }
            return innerArray.pop();
        },
        isEmpty: function(){
            return innerArray.length == 0
        }
    }
}

