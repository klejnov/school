;

function getInfoNumber(userNumber) {

// Удалим пробелы с начала и конца строки, либо удалим все пробелы и сделаем пустую строку ''.
// Но сделаем условие, чтобы первый раз отработала кнопка Отмена, т.к. trim "мешает" работе.

    if (userNumber != null) {
        userNumber = userNumber.trim();
    }

// Цикл на проверку:
// нажатие на кнопку Отмена
// введено ли значение
// введен текст или число
// не выходит ли число из диапозона
// введено ли целое значение

    while (userNumber == null || userNumber == '' || isNaN(userNumber) || Number.isInteger(+userNumber) == false) {
        switch (true) {
            case userNumber == null:
                alert('Вы нажали Отмена');
                userNumber = prompt('Попробуйте ввести число заново', '').trim();
                break;
            case userNumber == '':
                alert('Вы ничего не ввели');
                userNumber = prompt('Попробуйте ввести число заново', '').trim();
                break;
            case isNaN(userNumber):
                alert('Вы ввели не число');
                userNumber = prompt('Попробуйте ввести число, а не текст', '').trim();
                break;
            case Number.isInteger(+userNumber) == false:
                alert('Введите целое число');
                userNumber = prompt('Необходимо ввести целое число!', '').trim();
                break;
            default:
                alert('Что-то пошло не так :)');
                userNumber = prompt('Попробуйте ввести число заново', '').trim();
        }

    }

    var info = [];

    if (userNumber > 0) {
        info[0] = 'Число положительное';
    } else if (userNumber < 0) {
        info[0] = 'Число отрицательное';
    } else {
        info[0] = '0 разделяет положительные и отрицательные числа';
    }
    console.log(info[0]);

    info[1] = '';

    if (userNumber % 2 == 0 && userNumber % 3 == 0 && userNumber % 5 == 0) {
        info[1] += '2, 3 и 5';
        console.log('Ваше число делится на 2, 3 и 5');
    } else {
        if (userNumber % 2 == 0) {
            info[1] += '2';
            console.log('Ваше число делится на 2');
        }
        if (userNumber % 3 == 0) {
            info[1] == '' ? info[1] += '3' : info[1] += ', 3';
            console.log('Ваше число делится на 3');
        }
        if (userNumber % 5 == 0) {
            info[1] == '' ? info[1] += '5' : info[1] += ' и 5';
            console.log('Ваше число делится на 5');
        }
    }
    if (info[1] != '') {
        info[1] = 'Ваше число делится на ' + info[1];
    } else {
        info[1] = 'Число не делится на 2, 3 и 5';
    }

    console.log(info[1]);

    for (var i = 2; i < userNumber; i++) {
        if (userNumber % i == 0) {
            info[2] = 'Число ' + userNumber + ' не является простым';
            break;
        } else {
            info[2] = 'Число ' + userNumber + ' является простым';
        }
    }

    if (userNumber == 2) {
        info[2] = 'Число ' + userNumber + ' является простым';
    } else if (userNumber == 1) {
        info[2] = 'Число ' + userNumber + ' не является простым числом';
    } else if (userNumber == 0) {
        info[2] = 'Ноль к множеству натуральных чисел не принадлежит, следовательно, и не является простым числом. ';
    } else if (userNumber < 0) {
        info[2] = 'Отрицательные числа не являются простыми числами';
    }

    console.log(info[2]);
    console.log(info);

// Делаем страницу с итогами

    var addClass = document.getElementById("image");

    document.getElementById("result").innerHTML = 'Было введено следующее число:<br><span class="orange">' + userNumber;

    document.getElementById("totals").innerHTML = 'Итоги';

    document.getElementById("userNumber").innerHTML = 'Характеристики вашего числа:<br><span class="blue">' + info[0] + '<br>' + info[1] + '<br>' + info[2] + '</span>';

}
