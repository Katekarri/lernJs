// https://code.mu/ru/javascript/book/prime/multidimensionality/multi-arrays-filling/

// Задача 1
// Сформируйте с помощью двух вложенных циклов следующий массив:
// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]


const  arr1 = [];

for (let i = 0; i < 3; i++) {
	arr1[i] = []; 
	
	for (let j = 0; j < 5; j++) {
		arr1[i][j] = j + 1; 
	}
}
console.log(arr1)


// Задача 2
// Сформируйте с помощью двух вложенных циклов следующий массив:
// [['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']]


const  arr2 = [];

for (let i = 0; i < 3; i++) {
	arr2[i] = []; 
	
	for (let j = 0; j < 4; j++) {
		arr2[i][j] = 'x'; 
	}
}


// Задача 3
// Сформируйте с помощью трех вложенных циклов следующий массив:
// [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]


const  arr3 = [];

for (let i = 0; i < 3; i++) {
	arr3[i] = []; 
	
	for (let j = 0; j < 2; j++) {
		arr3[i][j] = []; 

    for (let k = 0; k < 5; k++) {
      arr3[i][j][k] = k + 1;
    }
	}
}


// Задача 4
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.


// после первого for надо добавить 	arr[i] = []; так же в этой и других задачах let arr = []; поменять на const  arr = []; и в некоторых случаях не понятно надо ли первый элемент массива начинать с цифры 1 или оставить преложенный автором вариант . эти моменты я заметила но каждый раз писать о них не буду ниже ))


// Задача 5
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = '';
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.


// вместо arr[i] = ''; надо arr[i] = [];


// Задача 6
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i];
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.


// вместо arr[i]; надо arr[i] = [];


// Задача 7
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = [];
// for (let i = 0; i < 3; i++) {

// 	arr[j] = [];	


// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.


// вместо arr[j] = []; надо arr[i] = [];


// Задача 8
// Автор следующего кода хотел сделать двухмерный массив:
// let arr;
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j + 1;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.


// вместо let arr; надо let arr = [];



// Задача 9
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] == [];
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.


// вместо arr[i] == []; надо arr[i] = [];



// Задача 10
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr = [];
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.


// вместо arr = []; надо let arr = [];



// Задача 11
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = '';
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.


// вместо let arr = ''; надо arr[i] = [];


// Задача 12
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 1; j <= 5; j++) {
// 		arr.push(j);
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

// вместо arr.push(j); arr[i].push(j);


// Задача 13
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j <= 5; j++) {
// 		arr[j][i] = j;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

//вместо arr[j][i] = j; arr[i][j] = j;


// Задача 14
// Автор следующего кода хотел сделать двухмерный массив:
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

//в самом начале необходимо добавить let arr = [];(const);


// Задача 15
// Сформируйте с помощью двух вложенных циклов следующий массив:
// [[1, 2], [3, 4], [5, 6], [7, 8]]

const arr15 = [];
let counter15 = 1;

for (let i = 0; i < 4; i++) {
  arr15[i] = [];

    for (let j = 0; j < 2; j++) {
      arr15[i][j] = counter15;
      counter15++;
    }
}

// Задача 16
// Сформируйте с помощью двух вложенных циклов следующий массив:
// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

const arr16 = [];
let counter16 = 2;

for (let i = 0; i < 4; i++) {
  arr16[i] = [];

    for (let j = 0; j < 3; j++) {
      arr16[i][j] = counter16;
      counter16 += 2;
    }
}


// Задача 17
// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

const arr17 = [];
let counter17 = 1;

for (let i = 0; i < 2; i++) {
  arr17[i] = [];

    for (let j = 0; j < 2; j++) {
      arr17[i][j] = [];
      
        for (let k = 0; k < 2; k++) {
          arr17[i][j][k] = counter17;
          counter17++;    
        }   
    }
}
console.log(arr17);


// Задача 18
// Автор следующего кода хотел сделать вот такой массив:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

// после строки let arr = []; необходимо добавить строку let k = 1;


// Задача 19
// Автор следующего кода хотел сделать вот такой массив:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

// после строки arr[i][j] = k; необходимо добавить строку	k++;


// Задача 20
// Автор следующего кода хотел сделать вот такой массив:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k--;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

// необходимо поменять k--; на 	k++;


// Задача 21
// Автор следующего кода хотел сделать вот такой массив:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
// let arr = [];
// let k;
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

// необходимо счетчику let k присвоть значение let k = 1;

// Задача 22
// Автор следующего кода хотел сделать вот такой массив:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
// let arr = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

// небходимо после строки arr[i][j] = k; добавить строку k++;


// Задача 23
// Автор следующего кода хотел сделать вот такой массив:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
// let arr = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0, k++; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

// отредактировать строку for (let j = 0, k++; j < 3; j++) - (let j = 0 j < 3; j++) и добавить псле строки arr[i][j] = k; строку k++;

// Задача 24
// Автор следующего кода хотел сделать вот такой массив:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
// let arr = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++; k++) {
// 		arr[i][j] = k;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

// отредактировать строку for (let j = 0; j < 3; j++; k++) - (let j = 0 j < 3; j++) и добавить псле строки arr[i][j] = k; строку k++;


// Задача 25
// Автор следующего кода хотел сделать вот такой массив:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
// let arr = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = ++k;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

// отредактировать строку arr[i][j] = ++k; - arr[i][j] = k; добавить псле строки arr[i][j] = k; строку k++;


// Задача 26
// Автор следующего кода хотел сделать вот такой массив:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
// 	arr[k] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

// отредактировать строку arr[k] = []; - arr[i] = [];

// Задача 27
// Автор следующего кода хотел сделать вот такой массив:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
// let arr = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; k++) {
// 		arr[i][j] = k;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

//// отредактировать строку for (let j = 0; j < 3; k++) - for (let j = 0; j < 3; j++) добавить псле строки arr[i][j] = k; строку k++;
