<?php
session_start();

define('DS', DIRECTORY_SEPARATOR);

/**
 * Автоматическая загрузка классов
 */

spl_autoload_register(function ($class_name) {

    $patchFile = 'classes' . DS . $class_name . '.php';

    if (!file_exists($patchFile)) {
        echo "Файла с классом $class_name нет";
        die();
    }
    include $patchFile;

});

try {

    if (isset($_SESSION['background']) && $_POST["AjaxColor"] == 'del') {
        session_destroy();
        echo json_encode([]);
        die();
    }

    if (isset($_POST["AjaxColor"]) && !$_POST["AjaxColor"] == '') {

        $db = new DataBase();

        $color = $_POST["AjaxColor"];
        $id = $_SESSION['id'];

        $db->setColor($color, $id);

        $_SESSION['background'] = $color;

        echo json_encode($color);
    }

    if (isset($_SESSION['background']) && $_POST["AjaxColor"] == '') {

        echo json_encode($_SESSION['background']);

    }

    if (!isset($_SESSION['background'])) {

        $db = new DataBase();

        $color = '#80ddca'; // Цвет по умолчанию

        $sql = "INSERT INTO background (id, color) VALUES (NULL, '$color');";
        $db->execute($sql);

        $id = $db->lastInsertId();

        $_SESSION['background'] = $color;
        $_SESSION['id'] = $id;
        echo json_encode($color);

    }

} catch (Throwable $e) {
    print <<<HTML_BLOCK
Выброшено исключение:   <b>{$e->getMessage()}</b><br>
Строка:                 <b>{$e->getLine()}</b><br>
В файле:                <b>{$e->getFile()}</b><br>
HTML_BLOCK;
}

//$db = new DataBase();
//$db->backup('sql-lesson-4');