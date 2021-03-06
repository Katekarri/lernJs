// Задача 1
// Есть массив a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89].
// Выведите все элементы, которые меньше 5.

let example1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
for (let i = 0; i < example1.length; i++){
  if (example1[i] < 5) {
    console.log(example1[i]);
  }  
}

// Задача 2
// Даны массивы:
// a = [ 8, 13, 21, 34, 55, 89];
// b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].
// Нужно вернуть массив, который состоит из элементов, общих для этих двух массивов.

let a = [99, 99, 2, 3, 5, 8, 13, 21, 34, 55, 89];
let b = [99, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let arrayOfCommonElement = [];
for (let i = 0; i < a.length; i++){
  for (let y = 0; y < b.length; y++){
    if (a[i] == b[y]) {
      if (arrayOfCommonElement.indexOf(a[i]) == -1) {
        arrayOfCommonElement.push(a[i]); 
      } 
   }
  }
}
console.log(arrayOfCommonElement);


// Задача 3
// Отсортируйте массив по значению в порядке возрастания и убывания.

// Пузырьковая сортировка
// Сортировка выбором
// Сортировка вставками
// Сортировка Шелла
// Сортировка подсчётом
// Сортировка расчёской
// Сортировка слиянием
// Пирамидальная сортировка

//  let example2First = [19, 8, -93, 4, 1, 16, 77, 780, 43, 237, 56];
//  let arr2 = example2First.sort((a, b) => a-b);
//  console.log(arr2);
// console.log(arr2.reverse());
 
// Сортировка выбором начинается с поиска наименьшего элемента в списке и обмена его с первым элементом (таким образом, наименьший элемент помещается в окончательную позицию в отсортированном массиве). Затем мы сканируем массив, начиная со второго элемента, в поисках наименьшего среди оставшихся n-1 элементов и обмениваем найденный наименьший элемент со вторым, т.е. помещаем второй наименьший элемент в окончательную позицию в отсортированном массиве. В общем случае, при i-ом проходе по списку (0\leqslant i\leqslant n-2) алгоритм ищет наименьший элемент среди последних n-i элементов и обменивает его с A[ i ]. После выполнения n-1 проходов список оказывается отсортирован.

let example2Second = [19, 8, -93, 4, 1, 16, 77, 780, 43, 237, 56];
for (let i = 0; i < example2Second.length; i++) { //запускаем первый уровень цикла  
    // берем  элемент который мы сравнивать будем с остальными элементами цикл
    let min = i; //говорим, что это индекс минимального значения
    for (let j = i; j < example2Second.length; j++) { //запускем второй цикл
        //он перебирает весь наш массив начиная с индекса, который сейчас проходит по первому циклу
        if (example2Second[j] < example2Second[min]) {//если текущий элемент массива меньше, чем элемент из первого цикла
            min = j;//то мы индекс текущего элемента записываем в минимальное значение
        }
    }
    if (min != i) {//после прохождения всего цикла мы смотрим, если минимальное НЕ равно индексу который взят из первого цикла
        let tmp = example2Second[i];//то создаем переменную в которую записываем значение элемента которое в массиве под индексом что проходит по первому циклу
        example2Second[i] = example2Second[min];// и говорим что элемент под индексом из первого цикла присвой элемент 
        //который находится в массиве под индексом, что записано в минимальное значение
        example2Second[min] = tmp; //и что элемент под индексом, который минмальный присваиваем значение которое было под индексом взятым из первого цикла
        //то есть в предыдущих двух строках мы меняем местами элемент который взят в первом цикле(который мы сравнивли со всем массивом)
        // и с тем элементом который в итоге был записн как минимальный(то есть тот что оказался меньше взятого изначально)
    }
}



// console.log(example2Second);//выводим полученный цикл
// console.log(example2Second.reverse()); //выводим полученный цикл начиная с конца

// let example2Second = [19, 8, -93, 4, 1, 16, 77, 780, 43, 237, 56];
// for (let i = 0; i < example2Second.length; i++) { 
//     for (let j = i; j < example2Second.length; j++) { 
//         if (example2Second[j] < example2Second[i]) {
//             let tmp = example2Second[i]; 
//             example2Second[i] = example2Second[j];
//             example2Second[j] = tmp; 
//         }
//     }
// }
// console.log(example2Second);
// console.log(example2Second.reverse()); 

// Задача 4
// Выведите "Да"" если стрка полиндром и "Нет", если строка не является полиндромом. Палиндром — это слово или фраза, которые одинаково читаются слева направо и справа налево.

let example = 'шалаш';
let isPolindrom = true;
for (let i = 0; i < (example.length - 1) / 2; i++){
  if (example[i] != example[example.length - 1 - i]) {
    isPolindrom = false;
    break;
  }
}
if (isPolindrom) {
  console.log('полиндромом');
  }


// let example = 'шалаш';
// let w = 1;
// let count = 0;
// for (let i = 0; i < (example.length - 1) / 2; i++){// length - 1 / 2(половина итеаций)  убираем букву по середине (не повторяюуюся в данном случае это 'л')
//   if ( example[i] == example[example.length - w]) {
//     count++;  // счетчик увеличиваем на 1
//     w++;
//    // увеличивает пеменную что бы передвинутся  на следуюую букву с конца
//   } else {
//     console.log('Не полиндромом');
//     break;
//   }
 
//   }
//  if (count == (example.length - 1) / 2) {
//   console.log('Полиндром');
// }



// Задача 5
// Вы принимаете от пользователя последовательность чисел, разделённых запятой, т.е строка состоящая из чисел и запятых. Составьте массив с этими числами.

let example5 = '19, 8, -93, 4, 1, 16, 77, 780, 43, 237, 56';
let x = JSON.parse("[" + example5 + "]");//Можем использовать JSON.parse() для преобразования строки чисел, разделенных запятыми, в массив. Мы можем объединить скобки со строкой, чтобы преобразовать ее в массив чисел.
console.log(x);

// let example5Second = '19, 8, -93, 4, 1, 16, 77, 780, 43, 237, 56';
// let arr = Array.from(example5Second);
// console.log(arr);

let example5Second = '19, 8, -93, 4, 1, 16, 77, 780, 43, 237, 56';
let arr = example5Second.split(', ');
console.log(arr);


// Задача 6 (это не через for)
// При заданном целом числе n посчитайте n + nn + nnn

let example16 = String(84);
let sum6 = Number(example16) + Number(example16 + example16) + Number(example16 + example16 + example16);
alert(sum6);

// Задача 7
// Дан массив, выводите чётные числа из заданного массива, а если встречаете число 237, то остановитесь.

let example4 = [19, 8, 93, 4, 1, 16, 77, 780, 43, 237, 56];
for (let i = 0; i <= example4.length; i++) {
  if (i % 2 == 0) {
    alert(example4[i]);
  }
  if (example4[i] == 237) {
    alert('Вот оно');
    break;
  }  
}


// Задача 8
// Дано 2 массива, выводите все элементы первого, которых нет во втором.

let first = [1, 17, 2, 7, 5, 8, 13, 21];
let second = [1, 2, 3, 4, 5, 6, 17, 8, 9, 10, 13];
let elementsFirst = [];
for (let i = 0; i < first.length; i++){
    if (second.indexOf(first[i]) == -1) {
      elementsFirst.push(first[i]);     
  }  
}
 console.log(elementsFirst);

// Задача 9
// Сложите цифры целого числа.

let exampel9 = String(865);
let sum = 0;
for (let i = 0; i < exampel9.length; i++) {
  sum += Number(exampel9[i]);
}
// alert(sum);


// Задача 10
// Посчитайте, сколько раз символ встречается в строке.

const exampel10 = 'Sunny day jfngoidj usnnd';
const symbolToCheck = 'n';
let numberOfTimes = 0;
for (let i = 0; i <= exampel10.length; i++){
  if (exampel10[i] == symbolToCheck) {
    numberOfTimes += 1;
   
  }
}
// numberOfTimes = numberOfTimes.length
console.log(numberOfTimes);


// Задача 11
// Нужно проверить, все ли числа в массиве уникальны.

let example11 = [19, 8, 93, 4, 1, 16, 1, 77, 780, 43, 237, 56];
let uniqueElement = 0;// уникальные значения 
for (let i = 0; i < example11.length; i++){
    let item = example11.indexOf(example11[i], i+1);// еременная которая выбиает елементы которые следуют за текуим элементом (по индексу)
    if (item >= 0) {// если indexOf возвращает index повтовтоки (от 0 и выше) - значит повтока есть 
        console.log('Есть повторки');
        break;
    } else {// а иначе он возваает -1 что значит овторки не надены
        uniqueElement++;// и в таком случае мы увеличиваем счетчик уникальных значений на 1
    }    
}
if(uniqueElement === example11.length) {// если счетчик уникальных значений авен длинне массива - все значения уникальны 
    console.log('Все значения уникальны!');
}
  

// console.log(result);
// Задача 12
// Дан массив чисел. Выведите значение наибольшего элемента в списке, а затем индекс этого элемента в списке. Если наибольших элементов несколько, выведите индекс первого из них.

let example12 = [19, 8, 93, 4, 1, 16, 77, 780, 43, 237, 56];
let maxNumber = example12[0];
for (let i = 0; i < example12.length; i++){
  if (example12[i] > maxNumber) {
    maxNumber = example12[i];  
  }  
}
console.log(maxNumber);
console.log(example12.indexOf(maxNumber));



// Задача 13
// В массиве все элементы различны. Поменяйте местами минимальный и максимальный элемент этого списка.
  
let example13 = [19, 8, 93, 4, 1, 16, 77, 780, 43, 237, 56];
let minNumberFromExample13 = example13[0];
let maxNumberFromExample13 = example13[0];
let minNumberIndex;
let maxNumberIndex;
for (let i = 0; i < example13.length; i++) {
    if (example13[i] < minNumberFromExample13) {
        minNumberFromExample13 = example13[i];
    }
    if (example13[i] > maxNumberFromExample13) {
        maxNumberFromExample13 = example13[i];
    }
}
        minNumberIndex = example13.indexOf(minNumberFromExample13);
        maxNumberIndex = example13.indexOf(maxNumberFromExample13);
        example13[maxNumberIndex] = minNumberFromExample13;
        example13[minNumberIndex] = maxNumberFromExample13;
console.log(example13);

