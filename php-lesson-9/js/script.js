;

var path = 'files';
var pathMove = '';

$(function () {

    function listGet() {

        $.ajax({
            type: "POST",
            url: "core.php",
            dataType: "json",
            data: {Ajax: "list", AjaxPath: path}
        }).done(function (result) {

            if ($.isEmptyObject(result)) {
                console.log('Завершаем работу. Пустой объект JSON');
                return;
            }
            $(".tbl-content tbody").empty();
            $.each(result.list, function (key, element) {

                if (element.type == 'dir') {
                    $(".tbl-content tbody").append('<tr class="type-dir"><td><i class="fa fa-folder-o" aria-hidden="true"></i></td><td>' + element.name + '</td></tr>');
                } else {
                    $(".tbl-content tbody").append('<tr><td><i class="fa fa-file-text-o" aria-hidden="true"></i></td><td><a href="/php-lesson-9/' + result.path + '/' + element.name + '" target="_blank">' + element.name + '</a></td></tr>');

                }

            });
            path = result.path;

            if (path == 'files') {
                $(".tbl-content tbody tr:first-child").hide();
            }
            contextmenu();
            clickDir();

        }).fail(function () {
            alert('Что-то пошло не так. Повторите позже.');
        });
    }

    listGet();

    function contextmenu() {

        $(".tbl-content tr").on('contextmenu', function (event) {

            event.preventDefault();
            var textElement = $(this).text();

            var Xinner = event.pageX;
            var Yinner = event.pageY - 40;
            console.log("Нажато contextmenu на\n" + textElement + "\nКоордината х: " + event.pageX + "\nКоордината y: " + event.pageY);

            $("#context").offset({top: Yinner, left: Xinner});

            $("#context div").first().text(textElement);
            $("#context").hide();
            $("#context").show(500);

        });

    }

    $("*").on('click', function () {

        $("#context").offset({top: 0, left: 0});
        $("#context").hide();

    });


    function clickDir() {
        $(".type-dir").on('click', function () {

            path += '/' + $(this).text();
            listGet();
            console.log('Выбрана директория: ' + path);

        });
    }


    function getActions(action, name, newName) {
        var data = {};
        if (action == 'del') {
            data = {AjaxAction: action, AjaxName: name}
        }
        if (action == 'rename' && newName != '' && newName !== null) {
            data = {AjaxAction: action, AjaxName: name, AjaxNewName: newName}
        }
        if (action == 'create-directory' && name != '' && name !== null) {
            data = {AjaxAction: action, AjaxDirName: name}
        }
        if (action == 'move' && name != '' && name !== null) {
            data = {AjaxAction: action, AjaxPathMove: name, AjaxPath: newName}
        }
        $.ajax({
            type: "POST",
            url: "core.php",
            dataType: "json",
            data: data
        }).done(function (result) {

            if ($.isEmptyObject(result)) {
                console.log('Завершаем работу. Пустой объект JSON');
                return;
            }

            $('.result-dir').slideDown(500).text(result);
            setTimeout(function () {
                $('.result-dir').slideUp(500);
            }, 3000);


            listGet();

        }).fail(function () {
            alert('Что-то пошло не так. Повторите позже.');
        });
    }

    function actionsUpload(path) {
        $('.upload').slideDown(500);
        $('#upload').on('click', function () {
            var file_data = $('#sortpicture').prop('files')[0];
            if (!file_data) {
                $('.result').slideDown(500).text('Произошла ошибка при загрузке файла');
                setTimeout(function () {
                    $('.result').slideUp(500);
                }, 2000);
                return;
            }
            //console.log(file_data);
            var form_data = new FormData();
            form_data.append('file', file_data);
            form_data.append('AjaxDirName', path);
            $.ajax({
                url: './core.php?uploadfiles',
                type: 'POST',
                dataType: 'text',
                cache: false,
                processData: false,
                contentType: false,
                data: form_data
            }).done(function (result) {
                console.log('Результат');

                console.log(result); // display response from the PHP script, if any

                if (result == '1') {
                    $('.result').slideDown(500).text('Файл успешно загружен');

                    setTimeout(function () {
                        $('.upload').slideUp(500);
                        $('.result').slideUp(500);
                    }, 2000);

                } else if (result == '3') {

                    $('.result').slideDown(500).text('Файл с таким именем уже существует');
                    setTimeout(function () {
                        $('.result').slideUp(500);
                    }, 2000);

                } else {

                    $('.result').slideDown(500).text('Произошла ошибка при загрузке файла');
                    setTimeout(function () {
                        $('.result').slideUp(500);
                    }, 2000);

                }

                listGet();

            });
        });
    }

    $("#context div").on('click', function () {

        var action = $(this).attr('data-action');
        var name = $(this).parent().find("div:first").text();

        //console.log(action + name);

        if (action == 'del') {
            getActions(action, path + '/' + name);
        }

        if (action == 'rename') {
            var newName = prompt('Введите новое имя для ' + name, name);
            if (!newName) {

                $('.result-dir').slideDown(500).text('Введите верное имя файла или директории');
                setTimeout(function () {
                    $('.result-dir').slideUp(500);
                }, 3000);
                return;
            }
            getActions(action, path + '/' + name, path + '/' + newName);
        }

        if (action == 'create-directory') {
            var dirName = prompt('Введите название для директории', '');
            console.log(dirName);
            getActions(action, path + '/' + dirName);
        }

        if (action == 'load') {
            actionsUpload(path);
        }

        if (action == 'move') {
            $('.move').show(500);
            pathMove = path + '/' + name;
            //console.log(action + path + '/' + name);
        }

    });

    $(".move #move").on('click', function () {

        getActions('move', pathMove, path);

        $('.move').slideUp(500);

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
