<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Домашнее задание</title>
    <meta charset="utf-8">
    <meta name="Keywords" content="учёба, школа">
    <meta name="Description" content="Обучение html, css, JavaScript и PHP">
    <meta name="author" content="Клейнов Олег">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style.min.css" rel="stylesheet">
</head>

<body>

<div class="container">
    <div class="header"></div>
    <div class="main">
        <div class="form">
            <h1>Введите количество котиков</h1>
            <form action="" method="post">
                <input type="number" placeholder="" name="number" value="0" required="required" autofocus="autofocus">
                <button type="submit">Показать котиков</button>
            </form>
        </div>
        <?php

        if (isset($_POST["number"])) {

            $number = $_POST["number"];
            if ($number < 0) {
                echo '<p class="error">Введите корректное количество котов</p>';
                exit();
            }

            echo ($number == 0) ? "Кажется, что вы любитель собак ¯\_(ツ)_/¯" : "Всего котов: $number";
            echo '<script>document.querySelector(".form").style.display = "none";</script>';
            for ($i = 1; $i <= $number; $i++) {
                echo "<h2>" . $i . "</h2><img src='http://placekitten.com/g/300/" . rand(300, 350) . "' alt='animals'>";
            }
        }
        ?>
    </div>
    <div class="sidebar-left">3</div>
    <div class="sidebar-right">4</div>
    <div class="footer"></div>
</div>

</body>

</html>
