var Maybe = function(a){
    this.value = a
}

Maybe.prototype.bind = function(f) {

    if ( this.value == undefined || this.value==null){
        return new Maybe(this.value)
    }
    else{
        return f(this.value);
    }
}

/////////////////////////////////////////////////////

var m = new Maybe(5)

var double = function(a){
    return new Maybe(a*2)
}

var triple = function(a){
    return new Maybe(a*3)
}

var nullify = function(a){
    return new Maybe(null);
}

console.log(m.bind(double).bind(triple));
console.log(m.bind(double).bind(nullify).bind(triple));