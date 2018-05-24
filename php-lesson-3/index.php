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
    <link href="css/style.min.css" rel="stylesheet">
    <script src="js/libs.min.js"></script>
</head>

<body>

<div class="container">
    <div class="header">1</div>

    <div class="main">
        <h1>Тест: «Настоящий ли вы бобруйчанин?»</h1>
        <div class="form">
            <div id="msg"></div>
            <div id="msg2"></div>
            <form action="" method="post">
                <input type="text" placeholder="" name="id" id="id" value="0">
                <input type="text" placeholder="" name="reply" id="reply" required="required" autofocus="autofocus">
                <button type="button">Ответ</button>
            </form>
        </div>
        <div class="sec">У вас осталось мало времени</div>
        <div class="seconds"></div>
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
