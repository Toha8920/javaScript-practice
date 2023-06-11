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
console.log(str2);