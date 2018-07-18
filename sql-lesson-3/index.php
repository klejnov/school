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
    <script src="js/libs.min.js"></script>
</head>

<body>

<div class="container">
    <div class="header">
        <div>1</div>
    </div>
    <div class="main">

        <section>

            <h1>Музыкальная коллекция</h1>
            <div class="search">Поиск:</div>
            <input type="text" placeholder="Введите название композиции" name="search" required="required">
            <div class="min-wrapper">
                <div class="min" hidden>(минимум 3 символа)</div>
            </div>

            <div class="album-wrapper"></div>

            <div id="not-found" hidden>
                <p class="not-found2">Увы, ничего не найдено</p>
                <p class="not-found2">¯\_(ツ)_/¯</p>
                <p class="not-found2" >Подсказка: попробуйте ввести «Любовь»</p>
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
