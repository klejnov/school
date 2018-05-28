;

var inpt = document.getElementById('match');
inpt.addEventListener('keypress', function (event) {

    function checkInput() {
        var str = event.target.value;
        var ptrn = /^[0-9]+(\.[0-9]+)?/;
        var arr = str.match(ptrn);
        console.log(arr);
        event.target.value = arr ? arr[0] : '';
    }

    setTimeout(checkInput, 1000);

});


// вывод кода в textarea (подключен jQuery v3.3.1 для работы с ajax)
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
