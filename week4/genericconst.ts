interface Size {
    length: number;
}

function count<T extends Size>(a: T): number {
    return a.length;
}

console.log(count("TypeScript"));
console.log(count([1, 2, 3, 4]));