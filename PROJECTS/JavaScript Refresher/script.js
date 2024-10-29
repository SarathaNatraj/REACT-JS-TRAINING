var fruits = ['Apple', 'Banana', 'Grapes', 'Orange', 'Pineapple', 'Guava', 'Cherry', 'Papaya'];

fruits.push('Avacado');

console.log(fruits);

fruits.splice(1, 1);

console.log('After Remove');
console.log(fruits);

fruits.splice(3, 1, 'Blue Berry');

console.log(fruits);

fruits.unshift('Plum');

console.log(fruits);

fruits.forEach(function (value, index) {
    //console.log(index + 1 + ' ' + value);
    console.log(`${index + 1} - ${value}`);
})

var result = fruits.map(function (item) {
    return item.startsWith('A');
});

console.log(result);

console.log([...fruits, 'Tomato']);

var num1 = [1, 2, 3, 4, 5];
var num2 = [6, 7, 8, 9, 10];

console.log([...num1, num2]);

var persons = [
    {
        firstname: 'Peter',
        lastname: 'Parker',
        age: 25
    },
    {
        firstname: 'Tony',
        lastname: 'Stark',
        age: 28
    },
    {
        firstname: 'Steve',
        lastname: 'Jobs',
        age: 65
    },
    {
        firstname: 'James',
        lastname: 'Cameron',
        age: 72
    },
    {
        firstname: 'Maria',
        lastname: 'Gomes',
        age: 31
    },

]

var res = persons.filter(item => item.age > 35)
console.log(res);

var res2 = persons.find(item => item.age > 35)
console.log(res2);

