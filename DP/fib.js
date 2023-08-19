function fib(n){
    if (n == 0) return 0;
    if(n == 1) return 1;
    let p1 = 0;
    let p2 = 1;
    let p3 = 0;
    let cur = 2;

    while (cur <= n){
        p3 = p1 + p2;
        p1 = p2;
        p2 = p3;
    }

    return p3;
}


console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));