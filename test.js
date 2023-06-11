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

console.log(car.start());