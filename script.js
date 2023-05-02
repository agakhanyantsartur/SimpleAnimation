'use strict';
/* const timerId = setTimeout(function(text) {
    console.log(text);
}, 2000, 'Hello'); */ //Время 2000 милисекунд, 'Hello' передастся с в text
  
// const timerId = setTimeout(logger(), 2000); //Когда мы пишем переменную мы записываем числовой идетификатор этого таймера

const btn = document.querySelector('.btn');
let timerId;
let i = 0; 

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px'; // двигаем по оси OX OY прибавляя позицию и пиксели 
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500); //При клике на кнопку, каждые 2 секунды, в консоль будет выводится text
// });
// clearInterval(timerId);
// function logger () {
//     if (i === 3) {
//         clearInterval(timerId)
//     }
//     console.log('text');
//     i++;
// }

//Чем рекурсивный setTimeout лучше чем setInterval -> потому что когда setInterval работает он не учитывает как долго будет работать функция внутри него

// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);