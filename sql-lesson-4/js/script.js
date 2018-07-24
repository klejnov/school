;

var color = '';

$(function () {

    function backgroundSet(newColor) {

        $.ajax({
            type: "POST",
            url: "data.php",
            dataType: "json",
            data: {AjaxColor: newColor}
        }).done(function (result) {

            if ($.isEmptyObject(result)) {
                console.log('Завершаем работу. Пустой объект JSON');
                return;
            }

            console.log('Цвет фона: ' + result);

            $('body').css('background', result);

        }).fail(function () {
            alert('Что-то пошло не так. Повторите позже.');
        });
    }


    backgroundSet(color);

    $('[type="color"]').on("change", function () {

        var color = $(this).val();

        console.log('Выбран цвет: ' + color);

        backgroundSet(color);

    });

    $('[type="button"]').on("click", function () {

        console.log('Удаляем сессию');

        backgroundSet('del');

        setTimeout(
            function () {
                location.reload();
            }, 500);

    });


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
