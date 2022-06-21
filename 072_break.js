// https://code.mu/ru/javascript/book/prime/loops/break/



// Задача 1
// Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

const arr1 = [5, 8, -45, 6, 4, 2, 0, 10, 56];

for (let i = 0; i < arr1.length; i++) {
const elem = arr1[i];
console.log(elem);
  if (elem == 0) {
    break;
  }
}

// Задача 2
// Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.

const arr2 = [5, 8, 9, -45, 6, 4, 2, 0, 10, 56];
let sumPositiveNumber = 0;

for (let i = 0; i < arr2.length; i++) {
  sumPositiveNumber += arr2[i];
  
  if (arr2[i + 1] < 0) {
    break;    
  }
}


// Задача 3
// Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).


// const arr3 = [5, 8, 9, 3, 6, 4, 3, 0, -10, 56];
// console.log(arr3.indexOf(3));

const arr3 = [5, 8, 9, 3, 6, 4, 3, 0, -10, 56];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] === 3) {
    console.log(i);
    break;
  }
}


// Задача 4
// Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.

let sumNum = 0;
let i;

for (i = 1; i < 100; i++) {
  sumNum += i;
  if (sumNum > 100) {   
  break; 
  }
}
console.log(i);
