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
console.log(emni2)
