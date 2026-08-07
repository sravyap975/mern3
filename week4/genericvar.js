"use strict";
let a = [10, 20, 30];
let b = ["Java", "Python", "TypeScript"];
let c = {
    value: 100
};
let d = {
    value: "Hello"
};
function show(x) {
    return x;
}
function count(x) {
    return x.length;
}
console.log(a);
console.log(b);
console.log(c.value);
console.log(d.value);
console.log(show(50));
console.log(show("World"));
console.log(count("TypeScript"));
console.log(count([1, 2, 3, 4, 5]));
