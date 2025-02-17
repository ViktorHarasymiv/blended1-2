'use strict'

/* *********  TASK - 1   ********* 

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).


// let styles = ['jazz','blues'];
// styles.push('rock-n-roll');

// let NEW_ARR = () => {
//   for(let i = 0; i <= styles.length; i++) {
//       if(styles[i] === 'blues') {
//           styles[i] = 'classic';
//           return console.log(styles);
//     }
//   }
// }

// function logItems(array) {
//     for(let i = 0; i <= styles.length - 1; i++) {
//         console.log(i , array[i]);
//     }
// }

// NEW_ARR()
// console.group()
// logItems(styles)

*/


/* *********  TASK - 2   *********


// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".


const logins = ["Peter", "John", "Viktor", "Sasha"];

function checkLogin(array) {
    let QUESTION_NAME = prompt('Введіть своє імя');

    for(let i = 0; i <= array.length; i++) {
      if(QUESTION_NAME === array[i]) {
        alert(`Welcome, ${array[i]}`)
      }
      else return alert("User not found");
 }
}

checkLogin(logins);

*/


/* *********  TASK - 3   *********

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage(...args) {
    let SUM = 0;
    
    for(let i = 0; i <= args.length - 1; i++) {
    if(!Number(args[i])) {
        return console.log('В масиві присітні не числові значення!');
    } 
}

    SUM = args.reduce((total, value) => total + value, 0);
    return console.log(args);
}

caclculateAverage(1, 5, 7, 8, 5)
caclculateAverage(1, 'variable', 7, 8, 5)

*/ 


/* *********  TASK - 4   *********

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

 function summary(array) {
    let RESULT = [];
    
    for(let i = 0; i < array.length - 1; i++) {
        RESULT.push(array[i] + array[i + 1]);
    }
  return RESULT;
}

console.log(summary(someArr));

*/


/* *********  TASK - 5   ********* 

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {

    if (!Array.isArray(numbers)) {
        return'Sorry, it is not an array!';
    }
    
    let SMALL_NUMB = Math.min(...numbers);
    return SMALL_NUMB;
}

console.log(findSmallestNumber(numbers));
console.log(findSmallestNumber("string"));

*/


/* *********  TASK - 6   *********

// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:

function findLongestWord(string) {
    const WORDS = string.split(" ");

    let WORDS_FIRST = "";

    for(let i = 0; i <= WORDS.length - 1; i++) {
        
        if(WORDS[i].length > WORDS_FIRST.length) {
           WORDS_FIRST = WORDS[i];
        }
    }
    return WORDS_FIRST;
}

console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

*/


/* *********  TASK - 7   *********

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на premium,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

 const user = {
     name: "John",
     age: 20,
     hobby: "tenis",
     premium: true,
   };

   user.mood = 'happy';
   user.hobby = 'skydiving';
   user.premium = 'premium';

   const USER_DATA = Object.keys(user);

   for(let index of USER_DATA) {
     console.log(`${index}: ${user[index]}`);
    
   }

   */


/* *********  TASK - 8   *********

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 1470,
  };

function companySalary(salary) {
    const SALARY_VALUES = Object.values(salary);

    let SUMM = SALARY_VALUES.reduce((initialValue, TOTAL_VALUES) => {
      return initialValue += TOTAL_VALUES;
    }, 0);

    return SUMM;
}

console.log(companySalary(salaries));

*/


/* *********  TASK - 9   *********

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.exist() ? this.a + this.b : 'Not such property';
    },
    mult() {
        return this.exist() ? this.a * this.b : 'Not such property';
    },
    exist() {
        return this.a && this.b;
    }
}

calculator.read(3, 3);
console.log(calculator.sum());
console.log(calculator.mult());

*/


/* *********  TASK - 10   ********* 

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

const fruits = [
      { name: "Яблуко", price: 45, quantity: 7 },
      { name: "Апельсин", price: 60, quantity: 4 },
      { name: "Банан", price: 125, quantity: 8 },
      { name: "Груша", price: 350, quantity: 2 },
      { name: "Виноград", price: 440, quantity: 3 },
      { name: "Банан", price: 125, quantity: 3 },
    ];

function calcTotalPrice(fruits, fruitName) {

    let SUMM = 0;
    
    for(let value of fruits) {
        if(fruitName === value.name) {
          SUMM += value.price * value.quantity;
        }
     }
     return SUMM;
}


console.log(calcTotalPrice(fruits, "Банан"));

console.log(calcTotalPrice(fruits, "Апельсин"));

*/