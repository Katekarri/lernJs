// https://code.mu/ru/javascript/book/prime/functions/practicum/

// №1
// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.

function getSumElements(arr) {
  let sumElements = 0;
  for (const elem of arr) {
    sumElements += elem;
  }
  return sumElements;
}

// console.log(getSumElements([1, 2, 3]))


// №2
// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.

function getArr(num) {
  const arrDividers = [];
  for (let i = 0; i <= num; i++) {
    if (num %  i === 0) {
      arrDividers.push(i);
    }
  }
  return arrDividers;
}

// console.log(getArr(8));


// №3
// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.

function getArrey(str) {
  const arrFromStr = str.split(''); 
  return arrFromStr;
}

// function getArrey(str) {
//   return str.split(''); 
// }

// console.log(getArrey('cats are my love'));


// №4
// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.

function getReversStr(str) {
  const reversStr = str.split('').reverse().join('');
  return reversStr;
}

// console.log(getReversStr('cats are my love'));


// №5
// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.

function makeCapitalize(str) {
  const capitalize = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalize;
}

// console.log(makeCapitalize('cats are my love'));

// №6
// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.

function makeCapitalizeEveryword(str)
{
  const arr6 = str.split(' ');
  const newarray = [];
  for(let i = 0; i < arr6.length; i++){
      newarray.push(arr6[i].charAt(0).toUpperCase()+arr6[i].slice(1));
  }
  return newarray.join(' ');
}
console.log(makeCapitalizeEveryword('cats are my love'));

// function makeCapitalizeEveryword(str)
// {
//   const arr6 = str.split(' ');
//   const newarray =  arr6.map(makeCapitalize)
//   return newarray.join(' ');
// }



// №7
// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

function getArrey(num) { 
  let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
  }
  return arr;
}

// console.log(getArrey(10));

// №8
// Сделайте функцию, которая будет возвращать случайный элемент из массива.

function getRandomElement(arr) {
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
   return randomElement;
 }
 
 console.log(getRandomElement([1, 2, 3, 4, 5]));

 //

// №9
// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

function isPrimeNum(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "No it's not a prime number";
    }
  }
  return "Yes it is a prime number";
}

console.log(isPrimeNum(13));



// №10
// Сделайте функцию, которая будет проверять пару чисел на дружественность. Дружественные числа - два числа, для которых сумма всех собственных делителей первого числа равна второму числу и наоборот, сумма всех собственных делителей второго числа равна первому числу.



// №11
// Используя созданную вами функцию из предыдущей задачи найдите все пары дружественных чисел в промежутке от 1 до 1000.



// №12
// Сделайте функцию, которая будет проверять число на совершенность. Совершенное число - это число, сумма собственных делителей которого равна этому числу.



// №13
// Найдите все счастливые билеты. Счастливый билет - это билет, в котором сумма первых трех цифр его номера равна сумме вторых трех цифр его номера.



// №14
// Сделайте функцию, которая параметром будет принимать два числа и возвращать массив их общих делителей.



// №15
// Сделайте функцию, которая будет принимать строку на русском языке, а возвращать ее транслит.



// №16
// Сделайте функцию, которая будет принимать число, а возвращать это число прописью. Пусть функция работает с числами до 999. Смотрите пример:
// <?php
// 	func(123); // выведет 'сто двадцать три'
// ?>