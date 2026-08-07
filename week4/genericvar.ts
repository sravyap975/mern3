let a: Array<number> = [10, 20, 30];
let b: Array<string> = ["Java", "Python", "TypeScript"];

interface Box<T> {
    value: T;
}

let c: Box<number> = {
    value: 100
};

let d: Box<string> = {
    value: "Hello"
};

function show<T>(x: T): T {
    return x;
}

interface Size {
    length: number;
}

function count<T extends Size>(x: T): number {
    return x.length;
}

console.log(a);
console.log(b);

console.log(c.value);
console.log(d.value);

console.log(show<number>(50));
console.log(show<string>("World"));

console.log(count("TypeScript"));
console.log(count([1, 2, 3, 4, 5]));