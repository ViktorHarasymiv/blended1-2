'use strict'

/* *********  TASK - 1   ********* */

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().


// function validateInput() {

// let promptValue = prompt();

// const validValue = 10;

// if (!Number(promptValue)) {
//     alert('Введіть числове значення !')
//     return;
// }

// if (Number(promptValue)  === validValue) {
//     alert('Вірно')
// }

//    else alert(`Невірно`);
// }

// validateInput();


/* *********  TASK - 2   ********* */

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"


// function checkHourIndex() {
//     const min = Math.floor(Math.random() * (59 - 0) + 0);
//     if(min > 0 && min < 15) {
//         return alert(`${min} входить у першу чверть` );
//     }

//     if(min > 16 && min < 30) {
//         return alert(`${min} входить у другу чверть` );
//     }
    
//     if(min > 31 && min < 45) {
//         return alert(`${min} входить у третю чверть` );
//     }

//     if(min > 46 && min < 60) {
//         return alert(`${min} входить у четверту чверть` );
//     }
// }

// checkHourIndex()


/* *********  TASK - 3   ********* */

// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.


// function checkSeason () {
//     let index = prompt();
//     switch (Number(index)) {
//     case 1:
//         alert('Зима');
//         break;
//     case 2:
//         alert('Весна');
//         break;
//     case 3:
//         alert('Літо');
//         break;
//     case 4:
//         alert('Осінь');
//         break;  
//     default:
//         alert('Введіть значення від 1 до 4');
//         break;
// }
// }

// checkSeason();


/* *********  TASK - 4   ********* */

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.


// function createHourOfMinutes () {
// let minutes = prompt('Введіть кількість хвилин:');
// minutes = Number(minutes);

// let hours = Math.floor(minutes / 60);

// let remainingMinutes = minutes % 60;

// let formattedHours = hours.toString().padStart(2, '0');
// let formattedMinutes = remainingMinutes.toString().padStart(2, '0');

// console.log(`${formattedHours}:${formattedMinutes}`);
// }

// createHourOfMinutes();


/* *********  TASK - 5   ********* */

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"


// function logIn() {

//     const pass = "Я головний";

//     let inputLogin = prompt();
//     let login = inputLogin;
//     let validPass;


//     if ( login == " " ) {
//        return alert('Скасовано');
//     }

//     if (login !== 'Адмін' && login !== 'Admin') {
//         return alert('Я вас не знаю !');
//     }

//     else {
//         validPass = prompt(`Введіть пароль : `); 

//         if (validPass != pass) {
//             return alert('Невірний пароль!');
//         }
//         else return alert('Добрий день!');
//     }
// }

// logIn();


/* *********  TASK - 6   ********* */

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.


// function getToNumber() {

//    let min = 0;
//    const max = 20;

//     while(min <= max) {
//        console.log(min);
//        min++;
//     }
// }

// getToNumber();


/* *********  TASK - 7   ********* */

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//     let summ = 0;
//     for( let i = max; i >= min; i--) {

//         if (i % 2 === 0) {
//             summ += i;
//         }
//         console.log(i);
//     }
//     return console.log(summ);
// }

// getNumbers(5, 15);


/* *********  TASK - 8   ********* */

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//     let RESULT = a > b;

//     if(isNaN(a) || isNaN(b)) {
//         console.log("Not a number!");
//         return;
//     }

//     if(RESULT === true) {
//         return console.log(b);
//     }

//     if(RESULT === false) {
//         return console.log(a)
//     }
// }

// min(3, 7);
// min(12, 5);

// min(5, 'name');


/* *********  TASK - 9   ********* */

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

// function isAdult(age) {
//     let VALID_AGE = age >= 18 ? confirm("Вхід дозволено") : confirm("Вам немає 18 років, вхід заборонено");

//     return console.log(VALID_AGE);
    
// }

// isAdult(27);
// isAdult(14);

/* *********  TASK - 10   ********* */

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//     for(let i = 1; i <= num; i++) {
//       if(i % 3 === 0) {
//           console.log("kwizz");
//       }
//       if(i % 5 === 0) {
//           console.log("buzz");
//       }
//       if(i % 3 === 0 && i % 5 === 0) {
//           console.log("fizzbuzz");
//       }
// }  
// }

// fizzBuzz(44);
// fizzBuzz(25);
// fizzBuzz(67);