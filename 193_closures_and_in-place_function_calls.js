// №1
// Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик(Давайте сделаем так, чтобы возвращаемая функция хранила в замыкании переменную num, Если добавить еще num++, то функция func станет готовым счетчиком:)

const func = (function() {
  let num = 1;

  return function() {
    console.log(num);
    num++;
  }
})();

func(); 
func(); 

//ну не очень я справилась

// №2
// Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.

const func2 = (function() {
  let num = 1;

  return function() {
      console.log(num);
      num++;
    if (num >= 5) {
      console.log(num);
      num = 1;
    }
  }
})();

func2(); 
func2(); 
func2(); 
func2();
func2(); 
func2();
func2(); 