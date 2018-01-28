;

var randomNumber = Math.round(Math.random() * 10);
var userNumber = prompt('Попробуйте угадать число от 0 до 10', '');

// Удалим пробелы с начала и конца строки, либо удалим все пробелы и сделаем пустую строку ''.
// Но сделаем условие, чтобы первый раз отработала кнопка Отмена, т.к. trim "мешает" работе.

if (userNumber != null) {
    userNumber = userNumber.trim();
}

// Цикл на проверку:s
// нажатие на кнопку Отмена
// введено ли значение
// введен текст или число
// не выходит ли число из диапозона

while (userNumber == null || userNumber == '' || isNaN(userNumber) || userNumber > 10 || userNumber < 0)  {
    switch (true) {
        case userNumber == null:
            alert('Вы нажали Отмена')
            userNumber = prompt('Попробуйте ввести число заново', '').trim();
            break;
        case userNumber == '':
            alert('Вы ничего не ввели')
            userNumber = prompt('Попробуйте ввести число заново', '').trim();
            break;
        case isNaN(userNumber):
            alert('Вы ввели не число')
            userNumber = prompt('Попробуйте ввести число, а не текст', '').trim();
            break;
        case userNumber > 10:
            alert('Вы ввели число больше 10')
            userNumber = prompt('Попробуйте ввести число в верном диапазоне', '').trim();
            break;
        case userNumber < 0:
            alert('Вы ввели число меньше 0')
            userNumber = prompt('Попробуйте ввести число в верном диапазоне', '').trim();
            break;
        default:
            alert('Что-то пошло не так :)')
            userNumber = prompt('Попробуйте ввести число заново', '').trim();
    }

}

var difference = Math.abs(randomNumber - userNumber);
var percent = (10 - difference) / 10 * 100;

//отладка
console.log(randomNumber);
console.log(userNumber);
console.log(difference);

var addClass = document.getElementById("image");

// немного изменим switch, чтобы показать, что в case можно писать условия.

switch (true) {
    case difference == 0:
        addClass.className += " perfectly";
        document.getElementById("correctly").innerHTML = '<span class="green">Вы угадали!</span>';
        break;

    case difference > 0 && difference <= 3:
        addClass.className += " nice";
        document.getElementById("correctly").innerHTML = '<span class="blue">Горячо!</span>';
        break;

    case difference >= 4 && difference <= 6:
        addClass.className += " bad";
        document.getElementById("correctly").innerHTML = '<span class="blue">Холодно!</span>';
        break;

    default:
        addClass.className += " bad";
        document.getElementById("correctly").innerHTML = '<span class="blue">Очень холодно! Вы были далеки от правильного ответа!</span>';

}

// Делаем страницу с итогами

document.getElementById("result").innerHTML = 'Было загадано число: <span class="red">' + randomNumber;

document.getElementById("totals").innerHTML = 'Итоги';

document.getElementById("userNumber").innerHTML = 'Вы дали ответ:<br><span class="blue">' + userNumber + '</span>';

document.getElementById("percent").innerHTML = 'Вы оказались близки на:<br><span class="blue">' + percent + ' %</span>';
