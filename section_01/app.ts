const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Johan',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

console.log(person.name);

//person.role.push('admin');
person.role = [0, 'admin'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());    
}