;

function randomButton() {

    var x1, x2;
    var resultX1 = false;
    var resultX2 = false;

    var userNumber = prompt('Введите целое число N для расчета формулы x + x^2 = N', '');

    if (userNumber != null) {
        userNumber = userNumber.trim();
    }

    console.log('typeof userNumber1 = ' + typeof userNumber); //отладка

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
                console.log('typeof userNumber2 = ' + typeof userNumber); //отладка
                alert('Введите целое число');
                userNumber = prompt('Необходимо ввести целое число по условию задания', '').trim();
                break;
            default:
                alert('Что-то пошло не так :)');
                userNumber = prompt('Попробуйте ввести число заново', '').trim();
        }

    }

// x + x^2 = N Приведем к общему виду
// x^2 + x - N = 0


// Найдем дискриминант D = b^2 – 4*a*c   В нашем случае упростим до:
// D = 1 + 4*c

    var d = 1 + 4 * userNumber;

//отладка
    console.log('Введенное число N = ' + userNumber);
    console.log('Дискриминант = ' + d);

// Найдем корни

    switch (true) {
        case d < 0:
            console.log('d < 0 квадратное уравнение не имеет корней'); //отладка
            break;
        case d == 0:
            console.log('d = 0 квадратное уравнение имеет 1 корень'); //отладка
            x1 = x2 = -1 / 2;
            break;
        case d > 0:
            console.log('d > 0 квадратное уравнение имеет 2 корня'); //отладка
            x1 = (-1 + Math.sqrt(d)) / 2;
            x2 = (-1 - Math.sqrt(d)) / 2;
            //отладка
            console.log('x1 = ' + x1);
            console.log('x2 = ' + x2);
            break;
        default:
            alert('Что-то пошло не так :)')
    }
    console.log('typeof x1 = ' + typeof x1); //отладка

// Проверим на целочисленность

    if (x1 % 1 == 0) {
        resultX1 = x1;
    }
    if (x2 % 1 == 0) {
        resultX2 = x2;
    }

//отладка
    console.log('resultX1 = ' + resultX1);
    console.log('resultX2 = ' + resultX2);

// Если был введен N при котором не были найдены целочисленные решения, то найдем ближайшие максимальное и минимальное N при котором решение будет найдено.

    var flag = true;

    if (resultX1 === false && resultX2 === false) {

        var userNumberMax = userNumber;
        var x11 = 2.1;
        var x22 = 2.1;

        for (userNumberMax; x11 % 1 != 0 || x22 % 1 != 0; userNumberMax++) {

            var d = 1 + 4 * userNumberMax;

//отладка
            console.log('Дискриминант = ' + d);

// Найдем корни

            switch (true) {
                case d < 0:
                    console.log('d < 0 квадратное уравнение не имеет корней'); //отладка
                    flag = false;
                    break;
                case d == 0:
                    console.log('d = 0 квадратное уравнение имеет 1 корень'); //отладка
                    x11 = x22 = -1 / 2;
                    break;
                case d > 0:
                    console.log('d > 0 квадратное уравнение имеет 2 корня'); //отладка
                    x11 = (-1 + Math.sqrt(d)) / 2;
                    x22 = (-1 - Math.sqrt(d)) / 2;
                    //отладка
                    console.log('x11 = ' + x11);
                    console.log('x22 = ' + x22);
                    break;
                default:
                    alert('Что-то пошло не так :)')
            }
        }

        var x11 = 2.1;
        var x22 = 2.1;
        var userNumberMin = userNumber;

        outerMin: for (userNumberMin; x11 % 1 != 0 || x22 % 1 != 0; userNumberMin--) {

            var d = 1 + 4 * userNumberMin;

//отладка
            console.log('Дискриминант = ' + d);

// Найдем корни

            switch (true) {
                case d < 0:
                    console.log('d < 0 квадратное уравнение не имеет корней'); //отладка
                    flag = false;
                    break outerMin;
                case d == 0:
                    console.log('d = 0 квадратное уравнение имеет 1 корень'); //отладка
                    x11 = x22 = -1 / 2;
                    break;
                case d > 0:
                    console.log('d > 0 квадратное уравнение имеет 2 корня'); //отладка
                    x11 = (-1 + Math.sqrt(d)) / 2;
                    x22 = (-1 - Math.sqrt(d)) / 2;
                    //отладка
                    console.log('x11 = ' + x11);
                    console.log('x22 = ' + x22);
                    break;
                default:
                    alert('Что-то пошло не так :)')
            }
        }

    }


    console.log('userNumberMax N = ' + --userNumberMax);
    console.log('userNumberMin N = ' + ++userNumberMin);


    var addClass = document.getElementById("image");

    if (resultX1 === false && resultX2 === false) {
        addClass.className = "image bad";
        document.getElementById("userNumber").innerHTML = '<span class="red">Вы ввели число <strong>' + userNumber + '</strong>. Увы, но целых решений уравнения - нет.</span>' +
            (flag == true ? '<br> А вот ближайшие от вашего введенного числа значения, при которых будут целочисленные решения:' : '<br> А вот ближайшее от вашего введенного числа значение, при котором будет целочисленное решение:');
        document.getElementById("userNumber1").innerHTML = '<span class="blue">Max: ' + userNumberMax + '</span>';
        if (flag == true) {
            document.getElementById("userNumber2").innerHTML = '<span class="blue">Min: ' + userNumberMin + '</span>';
        }
    } else {
        addClass.className = "image perfectly";
        document.getElementById("userNumber").innerHTML = '<span class="green">Вы ввели число <strong>' + userNumber + '</strong>. Найдены следующие корни:</span>';
        if (resultX1 !== false) {
            document.getElementById("userNumber1").innerHTML = '<span class="blue">' + resultX1 + '</span>'
        }
        if (resultX2 !== false) {
            document.getElementById("userNumber2").innerHTML = '<span class="blue">' + resultX2 + '</span>'
        }

    }

}