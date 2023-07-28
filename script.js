// function validateForm() {
//     const form = document.forms['myForm'];
//     const value = (form['fname'].value);
//     if (value === '') {
//         alert('Please write something')
//         return false;
//     }
//     else {
//         console.log(value)
//     }

//     return false;
// };

// const p = document.querySelector('.toha');
// p.style.color = 'red';
// p.style.fontSize = '32px';


function myMove() {
    const animate = document.getElementById('animate');
    let pos = 0;

    const interval = setInterval(frame, 5);

    function frame() {
        if (pos < 350) {
            pos++;
            animate.style.top = pos + 'px';
            animate.style.left = pos + 'px';
        }
        else {
            clearInterval(interval)
        }

    }
};


const btn = document.getElementById('btn');
const toha = document.getElementById('toha');
console.log(btn, toha)

btn.addEventListener('click', function () {
    console.log('Hello btn')
})

toha.addEventListener('click', function () {
    console.log('Hello div')
},)