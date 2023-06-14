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
