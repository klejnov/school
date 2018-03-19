;

var elem = document.getElementsByClassName('bulb-2')[0];
var range = document.getElementById('bulb');
var brightness = document.getElementsByClassName('brightness')[0];
brightness.innerHTML = 'Яркость 0 %';
document.querySelectorAll('.range-wrapper')[1].style.display = 'none';

function setOpacity() {
    elem.classList.toggle("opacity");
    console.log(elem.classList.contains('opacity'));

    if (elem.classList.contains('opacity')) {
        on();
        document.querySelectorAll('.range-wrapper')[1].style.display = 'inline-block';

    } else {
        off();
    }
}



function on() {
    var i = 0;
    var timerId = setInterval(function () {
        elem.style.opacity = ++i / 10;
        range.value = i;
        brightness.innerHTML = 'Яркость ' + i*10 + ' %';
        if (i == 10) {
            clearInterval(timerId);
        }
    }, 120);
}



function off() {
    var k = 10;
    var timerId = setInterval(function () {
        elem.style.opacity = --k / 10;
        brightness.innerHTML = 'Яркость ' + k*10 + ' %';
        range.value = k;
        if (k == 0) {
            clearInterval(timerId);
        }
    }, 120);
}


function changeLight() {
    x = range.value;
    elem.style.opacity = x / 10;
    brightness.innerHTML = 'Яркость ' + x*10 + ' %';
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
