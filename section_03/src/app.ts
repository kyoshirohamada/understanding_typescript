function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Max'}, {age: 30});
console.log(mergeObj.name);