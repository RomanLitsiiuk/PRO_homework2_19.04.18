function guessRandomNumber3() {
  var random1;
  var random2;
  var randomReplace;
  var guessNum;
  var winNumber;
  var i = 1;
  alert('Попробуйте угадать число от 0 до 10. У вас есть 3 попытки.');

  do {
    random1 = Math.round(Math.random() * 10);
    random2 = Math.round(Math.random() * 10);
    guessNum = +prompt('Попытка № ' + i + '. Введите число', '');
    console.log('Попытка № ' + i + '');

    if (random1 > random2) {
      randomReplace = random1;
      random1 = random2;
      random2 = randomReplace;
    }

    winNumber = guessNum >= random1 && guessNum <= random2;

    if (isNaN(guessNum) || guessNum  < 0 || guessNum  > 10) {
    	alert('Неверно ввели. Это не считается. Повторите попытку!');
      continue;
    }

    if (winNumber) {
    	console.log('Диапазон загаданных чисел от ' + random1 + ' до ' + random2 +'');
    	console.log('Вы угадали!, Ваше число ' + guessNum + '');
    } else {
    	console.log('Диапазон загаданных чисел от ' + random1 + ' до ' + random2 +'');
    	console.log('Вы промазали!, Ваше число ' + guessNum + '');
    }
    i++;
  } while (i < 4 && winNumber === false);

  if (winNumber) {
    alert('Поздравляем, вы выиграли!');
  } else {
    alert('Три попытки закончились. Вы проиграли');
  }
}

guessRandomNumber3();
