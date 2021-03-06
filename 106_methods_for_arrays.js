// https://code.mu/ru/javascript/book/prime/inbuilt/array/

// Задача 1
// Дан следующий массив:
// [1, 2, 3]
// Добавьте ему в конец элементы 4, 5, 6.

const arr1 = [1, 2, 3];
arr1.push(4, 5, 6);

console.log(arr1)

// Задача 2
// Дан следующий массив:
// [1, 2, 3]
// Добавьте ему в начало элементы 4, 5, 6.

const arr2 = [1, 2, 3];
arr2.unshift(4, 5, 6);

console.log(arr2);


// Задача 3
// Дан следующий массив:
// [1, 2, 3]
// Выведите на экран первый элемент этого массива.

const arr3 = [1, 2, 3];
console.log(arr3[0]);//вариант решения

const removedElement = arr3.shift();
console.log(removedElement);


// Задача 4
// Дан следующий массив:
// [1, 2, 3]
// Выведите на экран последний элемент этого массива.

const arr4 = [1, 2, 3];
const lastElement = arr4.pop();

console.log(lastElement);

// Задача 5
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Сделайте из этого массива следующий:
// [1, 2, 3]

const arr5 = [1, 2, 3, 4, 5];
const cutElements = arr5.slice(0, 3);

console.log(cutElements);


// Задача 6
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Используя этот массив, запишите в новую переменную следующий массив:
// [4, 5]

const arr6 = [1, 2, 3, 4, 5];
const cutElement = arr6.slice(3);

console.log(cutElement);


// Задача 7
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]

const arr7 = [1, 2, 3, 4, 5];
arr7.splice(1,2);

console.log(arr7);


// Задача 8
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice сделайте из него массив:
// [1, 2, 3, 'a', 'b', 'c', 4, 5]

const arr8 = [1, 2, 3, 4, 5];
arr8.splice(3, 0, 'a', 'b', 'c');

console.log(arr8);


// Задача 9
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice сделайте из него массив:
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1,0,'a','b');
arr9.splice(6,0,'c');
arr9.splice(8,0,'e');

console.log(arr9);


// Задача 10
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Найдите позицию числа 3 в этом массиве.

const arr10 = [1, 2, 3, 4, 5];
const indexNum = arr10.indexOf(3);

console.log(indexNum);

// Задача 11
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Проверьте, есть ли в этом массиве число 3.

const arr11 = [1, 2, 3, 4, 5];
const num = arr11.includes(3);

console.log(num);