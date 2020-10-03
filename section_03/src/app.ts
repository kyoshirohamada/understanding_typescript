function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30});
console.log(mergeObj.name);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = 'Got no value.';

    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));