<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Домашнее задание</title>
    <meta charset="utf-8">
    <meta name="Keywords" content="учёба, школа">
    <meta name="Description" content="Обучение HTML, CSS, JavaScript, jQuery, AJAX и PHP">
    <meta name="author" content="Клейнов Олег">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="css/style.min.css" rel="stylesheet">
    <link href="css/menu.css" rel="stylesheet">
    <script src="js/libs.min.js"></script>
</head>

<body>

<div class="container">
    <div class="header">
        <div>1</div>
    </div>
    <div class="main">

        <section>
            <h1>Файловый менеджер</h1>

            <div class="upload" hidden>
                <input id="sortpicture" type="file" name="sortpic" />
                <button id="upload">Загрузить</button>
                <div class="result"></div>
            </div>
            <div class="result-dir" hidden></div>

            <div class="move" hidden>
                <div class="">
                    Выберите директорию для перемещения и нажмите кнопку
                </div>
                <button id="move">Переместить</button>
            </div>

            <div class="tbl-header">
                <form action="#" name="form" id="form">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                        <tr>
                            <th></th><th><span>Имя файлов / директорий</span></th>
                        </tr>
                        </thead>
                    </table>
                </form>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody></tbody>
                </table>
            </div>

            <div id="context">
                <div class="name" data-action="name"></div>
                <div data-action="create-directory">Новая директория</div>
                <div data-action="load">Загрузить файл</div>
                <div data-action="rename">Переименовать</div>
                <div data-action="move">Переместить</div>
                <div data-action="del">Удалить</div>
            </div>
        </section>
    </div>
    <div class="sidebar-left">3</div>
    <div class="sidebar-right">4</div>
    <div class="footer">
        <details>
            <summary>Код JS</summary>
            <textarea id="code"></textarea>
        </details>
    </div>
</div>

<script src="js/script.js"></script>

</body>

</html>
