// https://code.mu/ru/javascript/book/prime/functions/functions-array/

// №1
// Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.

const arr1 = [
  function() {
    return 1;
  },
  function() {
    return 2;
  },
  function() {
    return 3;
  }
]

// №2
// Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию.

console.log(arr1[2]());

// №3
// Используя созданный вами массив arr найдите сумму результатов функций (без цикла).

arr1[0]() + arr1[1]() + arr1[2]();


// №4
// Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль.

for (let func of arr1) {
  console.log(func())
};