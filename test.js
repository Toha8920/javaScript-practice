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
// console.log(duplicate);

// const filtered = numbers2.filter(function (value, index, array) {
//     return value > 5;
// });
// console.log(filtered);



// kono array theke unique number gulo k kivabe ber korte pari;

const numbers3 = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];
const unique = numbers3.filter(function (value, index, array) {
    return array.indexOf(value) === index
});
// console.log(unique);

// javascript falsy value list
// false.
// 0 (zero)
// '' or “” (empty string)
// null.
// undefined.
// NaN.


// ternary operator
let age = 9;

// console.log((age > 10) ? "you are adult" : "you are not adult");

// js break continue

// js iterable  note(array and strings are iterable but object are not iterable)
const name = "W3Schools";

for (const x of name) {
    // console.log(x);
};

// The data type of NaN is number
// The data type of an array is object
// The data type of a date is object
// The data type of null is object
// The data type of an undefined variable is undefined *
// The data type of a variable that has not been assigned a value is also undefined *



function isArray1(myArray) {
    // console.log(myArray.constructor.toString().indexOf('Array') > -1);
};

isArray1({ name: 'toha' });

function isArray(myArray) {
    // console.log(myArray.constructor === Array);
};

isArray([1, 3])

const a = '5';
const b = +a;
// console.log(typeof b)


// javascript RegularExpression
// What Is a Regular Expression?
// A regular expression is a sequence of characters that forms a search pattern.

// When you search for data in a text, you can use this search pattern to describe what you are searching for.

// A regular expression can be a single character, or a more complicated pattern.

// Regular expressions can be used to perform all types of text search and text replace operations.


const text13 = 'I love  w3School';
// console.log(text13.search(/w3school/i))

const pattern = /e/;
// console.log(pattern.test("The best things in life are free"));

const imtiaz = "I love d5angladesh";

// console.log(imtiaz.search(/[a-z][0-9]angladesh/i));


// javascript error handling

try {
    addlert('welcome to me')
}
catch (err) {
    // console.log(err.name)
}

// javascript this keyword
//muloto js er modde this sobdo ti kono object e k denot kore

const person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
};

const person2 = {
    firstName: 'Toha',
    lastName: "Islam"
};

// console.log(person1.fullName.call(person2));

// window.addEventListener("load", "hello");

// js class 
class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    play() {
        // console.log(`${this.name} is a very good person`)
    }
}
const person3 = new Person('toha', 24); //create actual object 
const person4 = new Person('Imtiaz', 3)
person3.play();

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date;
        // console.log(date.getFullYear() - this.year)
    }
}

const myCar = new Car("Ford", 2014);
// console.log(myCar)
myCar.age()
// document.getElementById("demo").innerHTML =
//     "My car is " + myCar.age() + " years old.";
// age() {
//     const date = new Date();
//     return date.getFullYear() - this.year;
//   }



// Problem solving 2
//nicer sentence e summit sobdo ti kotobar bebohar kora hoyce?
const sentence = "Learn with summit is all about teaching web development skills and techniques in an efficient and  practical manner. If you are just getting started in web development, Learn with summit has all the tolls. lkaf lakjdlfkj summit alkjlkajsdfm. summit";

const matches = sentence.match(/summit/gi);
const occurrence = matches ? matches.length : 0;
const position = sentence.match(/Summits/i); //we can use search method
const positions = position ? `Position found in ${position.index}` : 'No position found';
// console.log(positions)
// console.log(occurrence);

//input:linearSearch(['a','b','c','d','c'],'c');
//output:2 or not found
// problem: linearSearch function ti implement kore dekhan;

function linearSearch(array, value) {
    let length = array.length
    for (let i = 0; i < length; i++) {
        if (array[i] === value) {
            return i;
        }
    };
    return 'Not found'
};
// console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c'));

//kono array theke ki vabe sob theke boro string khuje ber korben ebong tar index number dekhaben

function longestString(names) {
    let longestWord = '';
    for (const name of names) {
        if (name.length > longestWord.length) {
            longestWord = name;
        }
    };
    return [longestWord, names.indexOf(longestWord)];
}
// console.log(longestString(['summit saha', 'Learn with summit', 'akash', 'saad', 'Daiyan']));


// 1 theke 100 porjonto sokkha gulo 3,5 ebong 3 o 5 dara vibajjo ta ber koro.

function fizBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            console.log(`${i} is a FizzBuzz`)
        }
        else if (i % 3 === 0) {
            console.log(`${i} is Fizz`)
        }
        else if (i % 5 === 0) {
            console.log(`${i} is Buzz`)
        }
        else {
            console.log(i)
        }
    }
};
// fizBuzz(100);

// array theke kivabe amara falsy value khuje ber kore bad dite pari

const mixedArr = [
    "lws",
    undefined,
    "learn with summit",
    false,
    "",
    "apple",
    40,
    "k",
    true,
    "Thanks all",
    NaN
];    //false, undefined, "", null, NaN,0;

// const trueArray = mixedArr.filter(function (el) {
//     if (el) {
//         return true;
//     }
//     else {
//         return false
//     }
// });

const trueArray = mixedArr.filter(Boolean)

// console.log(trueArray)

//object theke falsy value kivabe bad dite pari

const obj = {
    a: "lws",
    b: undefined,
    c: "learn with summit",
    d: false,
    e: "",
    f: "apple",
    g: 40,
    h: "k",
    i: true,
    j: "Thanks all",
    k: NaN
};

function truthyObject(obj) {
    for (let i in obj) {
        if (!obj[i]) {
            delete obj[i]
        }
    };
    return obj;
};
// console.log(truthyObject(obj));
// if (!obj[i]) {
//     delete obj[i]
// }


let akash = new String("Bangladesh");
// console.dir(akash);

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};

// console.log(person.fullName)

const person5 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        this.language = lang;
    }
};


function temporary() {
    let counter = 0;

    return function () {
        counter += 1;
    }
};

const add = temporary();
add();
// console.dir(add)
add();
// console.dir(add)


// js class

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// const myCar1 = new Car("Ford", 2014);
// // const myCar2 = new Car("Audi", 2019);
// console.log(myCar1)


// js promises
const paymentSuccess = true;
const marks = 90;

function enroll() {
    console.log('Course enrollment is in progress');

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve();
            }
            else {
                reject('Payment failed')
            }
        }, 2000)
    });

    return promise;
};

function progress() {
    console.log('Course on progress...');

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            }
            else {
                console.log('You could not get enough marks to get the certificate')
            }
        }, 3000)
    });

    return promise;
};

function getCertificate() {
    console.log('Preparing your certificate');

    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('Congrets! You got the certificate')
        }, 1000)
    });

    return promise;
};

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function (value) {
//         console.log(value)
//     })
//     .catch(function (err) {
//         console.log(err)
//     });


// async await
async function course() {
    try {
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message)
    }
    catch (err) {
        console.log(err)
    }
}

course();




