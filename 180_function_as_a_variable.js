// https://code.mu/ru/javascript/book/prime/functions/function-as-variable/

// №1
// Сделайте функцию func, которая будет возвращать через return какую-либо строку.

function func1() {
	return 'hello';  
}

console.log(func1());

// №2
// Выведите результат работы функции func алертом в консоль.

function func2() {
  return 'hello';
}

alert(func2());


// №3
// Выведите исходный код функции func алертом в консоль.

function func3() {

}

alert(func3);


// №4
// Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func в консоль.

function func4() {
 
}

func4 = 123;
console.log(func4);

// №5
// Сделайте функцию func1, которая будет возвращать через return число 3.

function func1() {
  return 3;
}

// №6
// Скопируйте исходный код функции func1, в переменную func2.

function func1() {
  return 3;
}

const func2 = func1;


// №7
// Выведите в консоль сумму результатов работы функций func1 и func2.

console.log(func2() + func1());

// №8
// Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.

let func1 = function() {
  return 1;
};

// мг... не уверена в этом варианте, и что то тут прям зависла

// №9
// Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2.

let func2 = function() {
  return 2;
};

// №10
// Найдите сумму значений функций func1 и func2. Выведите эту сумму алертом в консоль.

console.log(func1() + func2());