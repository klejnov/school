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

        var userNumberPrompt = prompt('Введите число ' + i, '');

// Удалим пробелы с начала и конца строки, либо удалим все пробелы и сделаем пустую строку ''.
// Но сделаем условие, чтобы первый раз отработала кнопка Отмена, т.к. trim "мешает" работе.

        if (userNumberPrompt != null) {
            userNumberPrompt = userNumberPrompt.trim();
        }

// Цикл на проверку:
// нажатие на кнопку Отмена
// введено ли значение
// введен текст или число
// не выходит ли число из диапозона
// введено ли целое значение

        while (userNumberPrompt == null || userNumberPrompt == '' || isNaN(userNumberPrompt) || userNumberPrompt > 9 || userNumberPrompt < 0 || Number.isInteger(+userNumberPrompt) == false)  {
            switch (true) {
                case userNumberPrompt == null:
                    alert('Вы нажали Отмена');
                    userNumberPrompt = prompt('Попробуйте ввести число заново', '').trim();
                    break;
                case userNumberPrompt == '':
                    alert('Вы ничего не ввели');
                    userNumberPrompt = prompt('Попробуйте ввести число заново', '').trim();
                    break;
                case isNaN(userNumberPrompt):
                    alert('Вы ввели не число');
                    userNumberPrompt = prompt('Попробуйте ввести число, а не текст', '').trim();
                    break;
                case userNumberPrompt > 9:
                    alert('Вы ввели число больше 10');
                    userNumberPrompt = prompt('Попробуйте ввести число в верном диапазоне', '').trim();
                    break;
                case userNumberPrompt < 0:
                    alert('Вы ввели число меньше 0');
                    userNumberPrompt = prompt('Попробуйте ввести число в верном диапазоне', '').trim();
                    break;
                case Number.isInteger(+userNumberPrompt) == false:
                    alert('Введите целое число');
                    userNumberPrompt = prompt('Необходимо ввести целое число!', '').trim();
                    break;
                default:
                    alert('Что-то пошло не так :)');
                    userNumberPrompt = prompt('Попробуйте ввести число заново', '').trim();
            }

        }

        userNumber += ' \n Число ' + i + ': ' + userNumberPrompt;
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

// Делаем страницу с итогами

    document.getElementById("result").innerHTML = 'Были загаданы следующие числа:<br><span class="orange">' + randomNumber;

    document.getElementById("totals").innerHTML = 'Итоги';

    document.getElementById("userNumber").innerHTML = 'Вы ввели числа в следующем порядке:<br><span class="blue">' + userNumber + '</span>';

}