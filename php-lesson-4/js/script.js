;

$(function () {

    var tel = 'tel',
        mail = 'mail';

    function contactGet(param) {

        if (param == 'tel') {
            console.log('tel')
            var telAjaxID = 'tel';
        } else if (param == 'mail') {
            console.log('mail')
            var telAjaxID = 'mail';
        }

        $.ajax({
            type: "POST",
            url: "data.php",
            dataType: "json",
            data: {Ajax: telAjaxID}
        }).done(function (result) {

            $("#msg").empty();

            if ($.isEmptyObject(result)) {
                console.log('Завершаем работу. Пустой объект JSON');
                return;
            }

            $(result.reverse()).each(function (key, element) {

                var keys = Object.keys(element);

                if (param == 'tel') {
                    $("#msg").prepend('<p><a id="' + keys[0] + '" href="tel:' + element[keys[1]] + '">Тел: ' + element[keys[0]] + '</a></p>');
                }

                if (param == 'mail') {
                    $("#msg").prepend('<p><a id="' + keys[0] + '" href="mailto:' + element[keys[1]] + '">Написать: ' + element[keys[1]] + '</a></p>');
                }
            });

        }).fail(function () {
            alert('Что-то пошло не так. Повторите позже.');
        });
    };


    function contactGetJS() {

        $.ajax({
            type: "POST",
            url: "data.php",
            dataType: "json",
            data: {Ajax: "js"}
        }).done(function (result) {

            $("#msg-js").empty();

            if ($.isEmptyObject(result)) {
                console.log('Завершаем работу. Пустой объект JSON');
                return;
            }

            var keys = Object.keys(result);
            var i = 0;

            $.each(result, function (key, element) {

                var index = i++;

                if (keys[index].search(/tel/i) == 0) {
                    console.log('телефон');
                    var telReplace = element.replace(/[^0-9]/g, "");
                    $("#msg-js").append('<p><a id="' + keys[index] + '" href="tel:+' + telReplace + '">Тел: ' + element + '</a></p>');
                }

                if (keys[index].search(/mail/i) == 0) {
                    console.log('почта');
                    var mailReplace = element.replace(/@(.*?){1,}/g, "");
                    $("#msg-js").append('<p><a id="' + keys[index] + '" href="mailto:' + element + '">Написать: ' + mailReplace + '</a></p>');
                }

            });

        }).fail(function () {
            alert('Что-то пошло не так. Повторите позже.');
        });
    }

    $("[type='button-tel']").on("click", function () {
        console.log('Нажата кнопка с именем ' + $(this).text());
        contactGet(tel);
    });

    $("[type='button-mail']").on("click", function () {
        console.log('Нажата кнопка с именем ' + $(this).text());
        contactGet(mail);
    });

    $("[type='button-js']").on("click", function () {
        console.log('Нажата кнопка с именем ' + $(this).text());
        contactGetJS();
    });

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
