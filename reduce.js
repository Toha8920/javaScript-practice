const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.reduce((prev, current, currentIndex, array) => {
    return prev + current;
});
// console.log(result)


// spreed operator

let toha = {
    name: 'toha',
    age: 24
}

let roman = {
    x: 1,
    y: 2
};

console.log({
    ...toha,

    ...roman
})