;

var parent_ticker = document.querySelector('.ticker');

var arr_ticker = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]

];

function createTicker() {
    for (var i = 0; i <= 8; i++) {
        var line = document.createElement('div');
        line.className = "line";
        //console.log('i = ' + i);
        parent_ticker.appendChild(line);

        for (var k = 0; k <= 54; k++) {
            var parent_ticker_line = document.querySelector('.ticker .line:last-child');
            var column = document.createElement('span');
            column.className = 'off';
            parent_ticker_line.appendChild(column);
            //console.log('k = ' + k);
        }
    }
}


var flag = true;
var shift = -1;
setReverse(false);

function setReverse(reverse) {
    flag = reverse;
    if (flag == true) {
        shift = -1;
    } else {
        shift = 55;
    }
    setInterval(function () {
        setShift(flag);
    }, 300);
}


function setShift(flag) {

    if (shift == 0) {
        shift = 55;
    }

    if (flag == true) {
        shift += 1;
    } else {
        shift -= 1;
    }

    console.log(shift);

    parent_ticker.innerHTML = '';
    createTicker();

    arr_ticker.forEach(function (item, i, arr) {
        for (var s = 0; s <= 8; s++) {
            var a = 1 + (i + shift) % 55;
            var b = s + 1;
            if (item[s] == 1) {
                document.querySelector('.line:nth-child( ' + b + '  ) span:nth-child( ' + a + '  )').classList.add("on");
            }
        }
        console.log('a = ' + a);
    });
}

// Добавим управление с клавиатуры (стрелки право/лево).
addEventListener("keydown", function (event) {
    if (event.keyCode == 39) {
        setReverse(true);
        hover = document.querySelector('.fa-chevron-circle-right');
        hover.style.opacity = 1;
        setTimeout(function () {
            hover.style.opacity = 0.7;
        }, 300)
    }

    if (event.keyCode == 37) {
        setReverse(false);
        hover = document.querySelector('.fa-chevron-circle-left');
        hover.style.opacity = 1;
        setTimeout(function () {
            hover.style.opacity = 0.7;
        }, 300)
    }
});


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
