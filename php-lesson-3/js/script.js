;

$(function () {

    // Отладка (разкоментировать строку ниже)
    // $('#msg2, #id').show();

    var id = 0,
        successfully = 0,
        timerSec = 45,
        timerId = '';

    function questionSet(id) {

        $('#reply').val('');
        timer();
        if (id >= 5) {
            clearInterval(timerId);
        }

        $.ajax({
            type: "POST",
            url: "testing.php",
            dataType: "json",
            data: {idAjax1: id}
        }).done(function (result) {

            console.log(result);
            if ($.isEmptyObject(result)) {
                console.log('Завершаем работу. Пустой объект JSON');
                return;
            }
            var parse = JSON.parse(result["json"]);
            $("#msg").html(" Ответьте на вопрос:<br><span>" + parse[0]) + "</span>";
            $('#id').val(+id);
        }).fail(function () {
            alert('Что-то пошло не так. Повторите позже.');
        });
    }

    function questionCheck() {

        var reply = $('#reply').val();
        var id = $('#id').val();

        $.ajax({
            type: "POST",
            url: "testing.php",
            dataType: "json",
            data: {idAjax2: id, replyAjax: reply}
        }).done(function (result) {
            var parse = JSON.parse(result["json"]);

            // Вывод результата отладки
            $("#msg2").html(" Проверка ответа на предыдущий вопрос. Формат:<br> Вопрос/правильность ответа(1/0)/всего вопросов в базе <br>" + result["json"] + "<br>" + parse[0]);

            if (parse[1] == 1) {
                successfully += 1;
            }

            if (id == parse[2] - 1) {
                showResults(successfully, parse[2]);
            }
        }).fail(function () {
            alert('Что-то пошло не так. Повторите позже.');
        });
    }

    $(function () {
        questionSet(id);
    });

    function timer() {
        clearInterval(timerId);
        $('.seconds').text(timerSec);
        timerId = setInterval(function () {
            console.log("тик");
            var sec = $('.seconds');
            var secVal = parseInt(sec.text());
            sec.text(--secVal);
            if (secVal <= 0) {
                console.log("Стоп");
                $('.seconds').text(timerSec);
                clearInterval(timerId);
                $('button').click();
            }
        }, 1000);
    }

    function showResults(successfully, parse) {
        $('.seconds').html('<span>Спасибо! <br> Общее количество набранных баллов:<br>' + successfully + ' из ' + parse + '</span><br><span class="answer" >Ответы на эти и другие вопросы вы можете найти в Энциклопедии Бобруйска в разделе <a href="https://wiki.bobr.by/%D0%A2%D0%BE%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D1%8B_%D0%91%D0%BE%D0%B1%D1%80%D1%83%D0%B9%D1%81%D0%BA%D0%B0" target="_blank" rel="nofollow" rel="noopener noreferrer">Топонимы</a></span>');
        $('h1').text('Тест завершен!');
        $('.form, .sec').hide(700);
        console.log('Посчитаны результаты');
    }

    $("button").on("click", function () {
        console.log('Нажата кнопка с именем ' + $(this).text());
        questionCheck();
        questionSet(++id);
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
