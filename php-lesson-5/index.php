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

        <?php
print <<<HTML_BLOCK_FORM
        <form action="#" method="post">
            <input type="text" placeholder="" name="id" id="match" autofocus="autofocus">
        </form>
HTML_BLOCK_FORM
        ?>

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
