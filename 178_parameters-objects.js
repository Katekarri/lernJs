// https://code.mu/ru/javascript/book/prime/functions/parameters-objects/

// №1
// Определите, не запуская код, что выведется в консоль:
// function func(obj) {
// 	obj.a = '!';
// }
// let obj = {a: 1, b: 2, c: 3};
// func(obj);
// console.log(obj);

//a : '!'


// №2
// Определите, не запуская код, что выведется в консоль:
// function func(arg) {
// 	arg = '!';
// }
// let obj = {a: 1, b: 2, c: 3};
// func(obj.a);
// console.log(obj);

//{a: 1, b: 2, c: 3} , но в вначале думала что 1


// №3
// Определите, не запуская код, что выведется в консоль:
// function func(obj) {
// 	obj = '!';
// }
// let obj = {a: 1, b: 2, c: 3};
// func(obj.a);
// console.log(obj);

//{a: 1, b: 2, c: 3};


// №4
// Определите, не запуская код, что выведется в консоль:
// function func(arr) {
// 	arr.splice(1, 1);
// }
// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);

//[1,3]

// №5
// Определите, не запуская код, что выведется в консоль:
// function func(arr) {
// 	arr.slice(1, 1);
// }
// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);

//[1, 2, 3]; были вопросы, разбиралась

// №6
// Определите, не запуская код, что выведется в консоль:
// function func(arr) {
// 	let newArr = arr;
// 	newArr[0] = '!';
// }
// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);

//['!', 2, 3];