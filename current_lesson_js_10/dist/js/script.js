;

// сделаем конструктор
function Ball(color) {
    this.color = color;
    this.size = Math.round(Math.random() * (200 - 20) + 20);
    // сделаем метод, задающий скорость шара
    this.speed = function () {
        if (this.color == "red") {
            return this.size * 0.01;
        }
        if (this.color == "blue") {
            return this.size * 0.01;
        }
        if (this.color == "green") {
            return this.size * 0.01;
        }
        if (this.color == "orange") {
            return this.size * 0.01;
        }
    };
}

// сгенерируем объекты Шар
var ball_red = new Ball("red");
var ball_blue = new Ball("blue");
var ball_green = new Ball("green");
var ball_orange = new Ball("orange");

// отладка
console.log(ball_green.color + ball_green.size);
console.log(ball_red.speed());
console.log(ball_blue.speed());
console.log(ball_green.speed());
console.log(ball_red);
console.log(ball_blue);
console.log(ball_green);
console.log(ball_orange);


var bal = [ball_red, ball_blue, ball_green, ball_orange];
console.log('массив до сортировки:');
console.log(bal);

// первый запуск
getSort('size', false);

function createBallElement(bal_arr) {
    document.getElementById("ball-wrapper").innerHTML = '';
    bal_arr.forEach(function (item) {
        console.log(item);
        document.getElementById("ball-wrapper").innerHTML += '<div class="ball ' + item.color + '" style="width: ' + item.size + 'px; height: ' + item.size + 'px; animation: shake ' + item.speed() + 's linear alternate infinite;"></div>';
    });
}

function getSort(sort_key, reverse) {
    var i = sort_key;
    bal.sort(CompareForSort);
    if (reverse === true) {
        bal.reverse();
    }

    function CompareForSort(first, second) {
        console.log(first.speed());

        if (sort_key == "speed") {
            if (first.speed() === second.speed())
                return 0;
            if (first.speed() < second.speed())
                return -1;
            else
                return 1;
        } else {
            if (first[i] === second[i])
                return 0;
            if (first[i] < second[i])
                return -1;
            else
                return 1;
        }
    }

    createBallElement(bal);

    console.log('массив после сортировки, реверс - ' + reverse + ':');
    console.log(bal);
}

//вывод кода в textarea (подключен jQuery v3.3.1 для работы с ajax)
var code_js;
$.ajax({
    url: "js/script.js",
    dataType: "text",
    async: true,
    success: function (msg) {
        code_js = msg;
        document.getElementById("code").innerHTML = code_js;
    }
});
