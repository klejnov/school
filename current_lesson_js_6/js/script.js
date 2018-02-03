;

function randomButton() {
    var randomNumber;
    var userNumber;

    alert('Запомните следующие пять чисел!');

    for (var i = 1, randomNumber = ''; i < 6; i++) {
        randomNumber += ' \n Число ' + i + ': ' + String(Math.round(Math.random() * 9));
        alert(randomNumber);
        console.log('число ' + i + ' = ' + randomNumber);
    }
    // отладка
    console.log('Общая строка рандомная = ' + randomNumber);
    console.log('Тип = ' + typeof randomNumber);

    alert('Вспомните пять чисел показанных ранее и введите каждое из них последовательно в правильном порядке');

    for (var i = 1, userNumber = ''; i < 6; i++) {
        userNumber += ' \n Число ' + i + ': ' + prompt('Введите число ' + i, '');
        alert(userNumber);
        console.log('число ' + i + ' = ' + userNumber);
    }
    // отладка
    console.log('Общая строка пользовательская = ' + userNumber);
    console.log('Тип = ' + typeof userNumber);

    var addClass = document.getElementById("image");

    if (randomNumber == userNumber) {
        addClass.className = "image perfectly";
        document.getElementById("correctly").innerHTML = '<span class="green">Вы угадали числа в верном порядке!</span>';
    } else {
        addClass.className = "image bad";
        document.getElementById("correctly").innerHTML = '<span class="red">Вы не угадали числа!</span>';
    }

    var addClass = document.getElementById("image");

// Делаем страницу с итогами

    document.getElementById("result").innerHTML = 'Были загаданы следующие числа:<br><span class="orange">' + randomNumber;

    document.getElementById("totals").innerHTML = 'Итоги';

    document.getElementById("userNumber").innerHTML = 'Вы ввели числа в следующем порядке:<br><span class="blue">' + userNumber + '</span>';

}