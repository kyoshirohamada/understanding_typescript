const person = {
    name: 'Johan',
    age: 33,
    hobbies: ['Sports', 'Cooking']
}

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());    
}