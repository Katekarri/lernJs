// https://code.mu/ru/javascript/book/prime/conditions/examples/

// Задача 1
// Решите аналогичную задачу, только определите в какую треть часа попадает указанное количество минут.

let min;

if (min > 0 && min <= 20) {
  console.log('1 треть часа');
}

if (min > 20 && min <= 40) {
  console.log('2 треть часа');
}

if ( min > 40 && min <= 60) {
    console.log('3 треть часа');
}
 
// Задача 2
// В переменной arr содержится некоторый массив с числами. Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.

const arr = [1, 2, 3];

if (arr.length = 3) {
  const sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  } 
  console.log(sum);
}

// Задача 3
// Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.


const number = 40 + '';
const lastNum = number[number.length - 1];
if (lastNum == 0) {
  console.log('true');
}


// Задача 4
// Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.

const num = 345;

if (num % 2 == 0) {
    console.log('четное')
} else {
    console.log('нечетным')
}

// Задача 5
// Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком. Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет.

//Предыдущий вариант

// Задача 6
// Дано число. Проверьте, что оно делится на 3.

const number3 = 12;

if (number3 % 3 == 0) {
    console.log('делится на 3');
}