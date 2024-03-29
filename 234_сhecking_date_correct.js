// https://code.mu/ru/javascript/book/prime/time/date-correctness-checking/

// №1
// Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает true, если дата корректна и false, если нет. Пример работы этой функции для 31 января и 32 января:
// console.log(checkDate(2025, 0, 31)); // выведет true
// console.log(checkDate(2025, 0, 32)); // выведет false

function checkDate(year, month, day) {
  const date = new Date(year, month, day);
  if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
    return true;
  } else {
    return false;
  }
}

console.log(checkDate(2025, 0, 31)); // выведет true
console.log(checkDate(2025, 0, 32)); // выведет fals
