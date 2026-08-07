function show<T>(a: T): T {
    return a;
}

console.log(show<number>(10));
console.log(show<string>("Hello"));