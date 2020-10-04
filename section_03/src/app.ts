function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }    
}

@Logger('LOGGING - PERSON')
class Person {
    name = 'Johan';

    constructor() {
        console.log('Creating person object...');
    }
}

// const person = new Person();

// console.log(person);