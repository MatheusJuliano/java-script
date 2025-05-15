function plus(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

let y = 2;
console.log(square(plus(y))); // Mostra 9
var p1 = this[0];
var p2 = this[1];
var a = p2.x-p1.x;
var b = p2.y-p1.y;
return Math.sqrt(a*a+b*b)

function abs (x){
    if (x>= 0){
        return x;
    }
    else{
        return -x;
    }
}

function factorial(n) {
    var product = 1;
    while(n > 1){
        product *=n;
        n--;
    }
    return product;
}

function factorial(n) {
    var i, product = 1;
    for(i=2;  i <= n; i++)
        product *=i;
    return product
}
