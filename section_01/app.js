var person = {
    name: 'Johan',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
console.log(person.name);
//person.role.push('admin');
person.role = [0, 'admin'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
