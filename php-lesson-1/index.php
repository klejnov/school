<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Домашнее задание</title>
    <meta charset="utf-8">
    <meta name="Keywords" content="учёба, школа">
    <meta name="Description" content="Обучение HTML, CSS, JavaScript, jQuery и PHP">
    <meta name="author" content="Клейнов Олег">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style.min.css" rel="stylesheet">
</head>

<body>
<?php

//phpinfo();

?>
<div class="container">
    <div class="header">
        <div><h2>
                <?php
                // Так работает если пути к файлу прописаны в Windows:
                // $fileName = explode("\\", __FILE__);

                // А это универсальный вариант на реальном сервере и на Windows
                $fileName =  explode(DIRECTORY_SEPARATOR, realpath(__FILE__));
                echo "<h2>". $fileName[count($fileName)-1] ."</h2>";
                ?>
            </h2>
        </div>
    </div>

    <div class="main">
        <?php
        include 'content.php';
        ?>
        <a href="#" class="button" onClick="window.location.reload()">Еще</a>
    </div>
    <div class="sidebar-left">3</div>
    <div class="sidebar-right">4</div>
    <div class="footer"></div>
</div>

</body>

</html>
