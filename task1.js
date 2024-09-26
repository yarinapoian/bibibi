function inc(n) {
    return n + 1;
}
const a = 5;
const b = inc(a);
console.dir({a,b});



function inc2(num) {
    num.c += 1;
}
const obj = { c:5 };
inc2(obj);
console.dir(obj);


