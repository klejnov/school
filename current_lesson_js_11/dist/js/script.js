;

var time_wrapper = document.getElementById("time-wrapper");

setInterval(function() {
    var new_Year = new Date(2018, 11, 31, 23, 59, 59, 0);
    var current_time = new Date();

    var month = new_Year.getMonth()-1 - current_time.getMonth();
    var date = new_Year.getDate() - current_time.getDate();
    var hours= new_Year.getHours() - current_time.getHours();
    var minute = new_Year.getMinutes() - current_time.getMinutes();
    var seconds = new_Year.getSeconds() - current_time.getSeconds();

//отладка
    console.log(month);
    console.log(date);
    console.log(hours);
    console.log(minute);
    console.log(seconds);
    console.log(new_Year);

    time_wrapper.querySelectorAll('div>span:first-child')[0].innerHTML = month;
    time_wrapper.querySelectorAll('div>span:first-child')[1].innerHTML = date;
    time_wrapper.querySelectorAll('div>span:first-child')[2].innerHTML = hours;
    time_wrapper.querySelectorAll('div>span:first-child')[3].innerHTML = minute;
    time_wrapper.querySelectorAll('div>span:first-child')[4].innerHTML = seconds;

}, 1000);

function setSize(size) {
    for (var i = 0; i < time_wrapper.querySelectorAll('div>span:first-child').length; i++) {
        time_wrapper.querySelectorAll('div>span:first-child')[i].style.fontSize = size + 'px';
    }
}

function setColor(color) {
    for (var i = 0; i < time_wrapper.querySelectorAll('div>span:first-child').length; i++) {
        time_wrapper.querySelectorAll('div>span:first-child')[i].style.color = color;
    }
}

var size = 10;

function setSelect() {
    for (var i = 0; i < document.querySelectorAll('.select>a').length; i++) {
        size += 5;
        document.querySelectorAll('a')[i].style.fontSize = size + 'px';
    }
}
setSelect();

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
