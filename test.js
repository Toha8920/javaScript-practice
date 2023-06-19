// javaScript function ()
let car = {
    name: 'ns',
    color: 'black',
    start: function () {
        this.stop();
        console.log('akash')
    },
    stop: function () {
        console.log('toha')
    }
};

// console.log(car.start());

// javaScript replace function 
let str = 'I love Canada';
let str2 = str.replace("Canada", "Bangladesh");
// console.log(str2);



// JavaScript String slice();
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);    //slice(startingPoint,endPoint)
// console.log(part);



// JavaScript String substring();
// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring();

let fruit = "Apple, Banana, Kiwi";
let fruits = str.substring(7, 13);
// console.log(fruits);


// JavaScript String toUpperCase()
let text1 = 'My name is Toha Islam';
let text2 = text1.toUpperCase();
// console.log(text2);

// JavaScript String toLowerCase()
let text3 = "My name is Toha islam";
let text4 = text1.toLowerCase();
// console.log(text4);


// JavaScript String concat()
// concat() joins two or more strings:
let text5 = "Hello";
let text6 = "World";
let text7 = text6.concat(" ", text5);
// console.log(text7);



// The concat() method can be used instead of the plus operator. These two lines do the same:
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");


// Note
// All string methods return a new string. They don't modify the original string.

// Formally said:


// Strings are immutable: Strings cannot be changed, only replaced



// JavaScript String split()
// A string can be converted to an array with the split() method:

let emni = 'Toha Islam';
const emni2 = emni.split("");
// console.log(emni2)



// JavaScript String indexOf()
// The indexOf() method returns the index (position) the first occurrence of a string in a string: and indexOf() case sensitive
let text8 = "Please locate where 'locate' occurs!";
let index = text8.indexOf("locate");
// console.log(index)


// JavaScript String match()
// The match() method returns an array containing the results of matching a string against a string (or a regular expression)
let text9 = "The rain in SPAIN stays mainly in the plain";
// console.log(text9.match("ain"))



// JavaScript String includes()
// The includes() method returns true if a string contains a specified value.
// Otherwise it returns false.
let text10 = "Hello world, welcome to the universe.";
// console.log(text10.includes("world"));



// Variable Substitutions
// Template literals allow variables in strings:
let firstName = "John";
let lastName = "Doe";
let text11 = `Welcome ${firstName}, ${lastName}!`;


// Integer Precision
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

// js Number
// A common mistake is to expect this result to be 30:
let x = 10;
let y = 20;
let z = "The result is: " + x + y;
// console.log(z);
// actually js runs left to right if js find a string in a line at first it will treat the whole line as a string. Otherwise if js find a number at first of the line it will treat a number data type.
let xx = 10;
let yy = 20;
let zz = x + y + "The result is: ";
// console.log(zz);


// In javascript in plus expression string will priority first but in divide or multiply expression number data type will get more priority as much as it can.


// NaN is also a number.
// Infinity is a number: typeof Infinity returns number.


// object can not be compare if we compare twice object by == === it will always return false.
// The difference between == and === is == just check value not type on the other hand === check value and type also.




// toString() Method, toExponential() Method, toFixed() Method, toPrecision() Method all  return a string



// javaScript Array
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
// console.log(length)

// check the last element of an array.
let lastElement = fruitss[fruitss.length - 1];
// console.log(lastElement);


// For loop 
const fruitsss = ["Banana", "Orange", "Apple", "Mango"];

for (i = 0; i < fruitsss.length; i++) {
    // console.log(i);
    // console.log(fruitsss[i])
}

const fruitssss = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruitssss.length;

let text12 = "<ul>";
for (let i = 0; i < fLen; i++) {
    text12 += "<li>" + fruitssss[i] + "</li>";
}
text12 += "</ul>";
// console.log(text12);
// document.getElementById('onnokichu').innerHTML = text12;

// forEach() method
function myFunction(value) {
    // console.log(value);
}
fruitssss.forEach(myFunction);


// for add something in array use push() method.
// same thing we can do 
fruitssss[fruitssss.length] = 'LICHU';
// console.log(fruitssss);



// // WARNING !!
// If you use named indexes, JavaScript will redefine the array to an object.
// After that, some array methods and properties will produce incorrect results.



// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes.


const numbers = [1, 2, 3, 4];
const persons = { name: 'toha', age: 23 }
// console.log(typeof numbers);
// console.log(typeof persons);
// both will return array but if we have to check then we can use isArray() method



// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits1.toString());
// console.log(fruits1.join(' * '));
// pop() method if we want only the last element of an array
// console.log(fruits1.pop());
// push () method for use to add something in an array



const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits2)



// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:



// adding to array concat() method
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
// console.log(myChildren)



// JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array.
// This example slices out a part of an array starting from array element 1 ("Orange"):
const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);   //slice(jekhan theke suru hobe, jeikhane jai ses hobe)
// console.log(citrus);


// The slice() method creates a new array.
// The slice() method does not remove any elements from the main  array.


// javascript sorting
const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

// console.log(cars.sort(function (a, b) {
//     return (a.year - b.year);
// }));

// console.log(cars.sort(function (a, b) {
//     return (a.type - b.type)
// }))

// javaScript forEach() method
const numbers1 = [40, 50, 60, 10, 30, 20];

function myNumbers(value, index, array) {
    // console.log(value, index, array);
}

numbers1.forEach(myNumbers)


// javaScript map() method
function myNumbers2(value, index, array) {
    return value * 2;
}
// console.log(numbers1.map(myNumbers2));


// javaScript filter() method
function myFilters(value, index, array) {
    return value > 30;
}
// console.log(numbers1.filter(myFilters));


// javascript reduce() method
// const numbers1 = [40, 50, 60, 10, 30, 20];
function myReduce(total, value, index, array) {
    return total + value;
}
// console.log(numbers1.reduce(myReduce, 10));


// javascript array every() method 
function myEvery(value, index, array) {
    return value > 18;
}
let allOver18 = numbers1.every(myEvery);
// console.log(allOver18)


// JavaScript Array some()
// The some() method checks if some array values pass a test.
function myFunction(value, index, array) {
    return value > 18;
}
let someOver18 = numbers1.some(myFunction);
// console.log(someOver18);


// js array find() function
// The find() method returns the value of the first array element that passes a test function.
let first = numbers1.find(myFunction);
// console.log(first)
function myFunction(value, index, array) {
    return value > 18;
}


// JavaScript Array.from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.
Array.from("ABCDEFG");


// An array declared with const has Block Scope.
// An array declared in a block is not the same as an array declared outside the block:
const cars2 = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
    const cars = ["Toyota", "Volvo", "BMW"];
    // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"

// An array declared with var does not have block scope
var cars3 = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
    var cars3 = ["Toyota", "Volvo", "BMW"];
    // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"



// javascript date
// console.log(new Date(2022, 0))


// some javascript problem solving

// dava khelar randomly number paowar upay
// console.log(Math.ceil(Math.random() * 6));
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandomNumber(1, 6));


// ki vabe amara amader class er sokoler nam alphabetically sajate pari
const students = ["Summit", "Saad", "Dayan", "Akash"];
// console.log(students.sort()); main array k change kore


// class er sokoler roll number cromo onujai sajate pari
const rollNumbers = [3, 5, 1, 2, 20];

// console.log(rollNumbers.sort(function (a, b) {
//     return a - b
// }))


// kono ekta sal leap year kina
function isLeapYear(year) {
    if ((year % 400 === 0) || year % 4 === 0 && year % 100 !== 0) {
        console.log(`${year} is a leap year`)
    }
    else {
        console.log(`${year} is not leap year`)
    }
}
// isLeapYear(2028)


// kono sentence e koto gula vowel ace ta ber korar niom
const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function countVowels(sentence) {
    let count = 0;
    let letters = Array.from(sentence);
    letters.forEach(function (value, index, array) {
        if (vowel.includes(value)) {
            count++
        }
    });
    return count;
}

// console.log(countVowels('I love Bangladesh'));
// Array.from() method returns an Array object form any object with a length property or any iterable object


// kono array theke duplicate number gulo k kivabe ber korte pari
const numbers2 = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const duplicate = numbers2.filter(function (value, index, array) {
    return array.indexOf(value) !== index;
    // return console.log(index)
});
console.log(duplicate);

// const filtered = numbers2.filter(function (value, index, array) {
//     return value > 5;
// });
// console.log(filtered);



// kono array theke unique number gulo k kivabe ber korte pari;

const numbers3 = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];
const unique = numbers3.filter(function (value, index, array) {
    return array.indexOf(value) === index
});
console.log(unique)



