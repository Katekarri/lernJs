// Задача 1
// Создайте объект с ключами 1, 2 и 3 и значениями 'a', 'b' и 'c'.Выведите на экран все его элементы.

const obj1 = {
  1: 'a',
  2: 'b',
  3: 'c'
};
console.log(obj1)


// Задача 2
// Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
};

const sumElement = obj2.a + obj2.b + obj2.c;

// Задача 3
// Создайте объект с ключами 1a, 2b и с - с и значениями 1, 2 и 3. Найдите сумму его элементов.

const obj3 = {
  '1a': 1,
  '2b': 2,
  c: 3
};

const sumElementObj3 = obj3['1a'] + obj3['2b'] + obj3['c'];


// Задача 4
// Дан объект:
// let obj = {'1a': 1, 'b2': 2, 'с-с': 3, 'd4': 4};
// Для каких ключей данного объекта кавычки обязательны, а для каких нет ?

// '1a', b2, 'с-с', d4
 

// Задача 5
// Дан объект:
// let obj = {key1: 1, key2: 2, key3: 3};
// Найдите сумму его элементов.Обращайтесь к элементам с помощью изученного синтаксиса.

const obj5 = {key1: 1, key2: 2, key3: 3};
const sumElementObj5 = obj5.key1 + obj5.key2 + obj5.key3;


// Задача 6
// Дан объект:
// let obj = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};
// К каким элементам этого объекта допустимо обращение через свойство, а к каким - нет ?

// obj6.b2, obj6.d4, obj6['1a'], obj6['eee-']


// Задача 7
// Создайте объект user с ключами name, surname, patronymic и какими - то произвольными значениями.Выведите на экран фамилию, имя и отчество через пробел.

const user = {
  nameUser: 'Luk' ,
  surname: 'Sky',
  patronymic: 'Worker',
}
console.log(`${user.nameUser}` + ' ' + `${user.surname}` + ' ' + `${user.patronymic}`);
console.log(`${user.nameUser + ' ' + user.surname + ' ' + user.patronymic}`);
console.log(`${user.nameUser} ${user.surname} ${user.patronymic}`);
console.log(user.nameUser + ' ' + user.surname + ' ' + user.patronymic);

// Задача 8
// Создайте объект date с ключами year, month и day и значениями, соответствующими текущему дню.Выведите созданную дату на экран в формате год - месяц - день.


const date = {
  year: '2022',
  month: '05',
  day: '03',
}

let today = `${date.year}` + '-' + `${date.month}` + '-' + `${date.day}`;
// let today = date.year + '-' + date.month + '-' + date.day;
console.log(today);

const x = [date.year, date.month, date.day].join('-');
console.log(x);



