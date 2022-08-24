// function stopWatch() {
//         var startTime = Date.now();
//         function getDelay() {
//         var elapsedTime = Date.now() — startTime;
//         alert(elapsedTime);
//         }
//         return getDelay;
//     }
//     let timer = stopWatch();
//     // Сделать что-нибудь за некоторое время.
//     for (let i = 0; i < 1000000; i++) {
//     let foo = Math.random() * 10000;
//     }
//     // Вызвать возвращаемую функцию.
//     timer();
// function youSayGoodBye() { debugger
//     alert("Good Bye!");debugger
//     function andISayHello() {debugger
//     alert("Hello!");
//     }
//     return andISayHello;debugger
// }
// let something = youSayGoodBye();debugger
// something();debugger
// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos === 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }
// btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000, 'hElllo');
//     timerId = setInterval(logger, 500);
// })
// clearTimeout(timerId)
// clearInterval(timerId);
// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }
// let id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log, 500)
// }, 500);
// Урок 9
// области видимости
// let safeToProceed = false;
//  function isItSafe () {
//     if(safeToProceed){
//         alert('You shall pass!')
//     } else {
//         alert('You shall not pass!')
//     }
//  }
//  isItSafe();
// function isThePriceRight(cost) {
//     let total = cost + 1;
//     if(total > 3) {
//         alert(total);
//     } else {
//         alert('Not Enough!')
//     }
// }
// isThePriceRight(4);

// alert(foo); // undefined, так так сначала инициализируется var
// var foo = "Hello!";

// Глава 9 Замыкание
function youSayGoodBye () {
    alert('good bye!');
    function andISayHello () {
        alert('hello!');
    }
    return andISayHello;
}
let something = youSayGoodBye();
something();