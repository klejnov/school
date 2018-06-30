<?php

define('DS', DIRECTORY_SEPARATOR);

/**
 * Автоматическая загрузка классов
 */

spl_autoload_register(function ($class_name) {

    $patchFile = 'classes/' . $class_name . '.php';

    if (!file_exists($patchFile)) {
        echo "Файла с классом $class_name нет";
        die();
    }
    include $patchFile;

});

if (isset($_POST["Ajax"]) && $_POST["Ajax"] == 'list') {
    echo File::getList($_POST["AjaxPath"]);
}

if (isset($_POST["AjaxAction"]) && $_POST["AjaxAction"] == 'del') {
    echo File::remove($_POST["AjaxName"]);
}

if (isset($_POST["AjaxAction"]) && $_POST["AjaxAction"] == 'rename') {
    echo File::rename($_POST["AjaxName"], $_POST["AjaxNewName"]);
}

if (isset($_POST["AjaxAction"]) && $_POST["AjaxAction"] == 'create-directory') {
    echo File::createDirectory($_POST["AjaxDirName"]);
}

if (isset($_GET['uploadfiles'])) {
    echo File::upload($_POST["AjaxDirName"], $_FILES);
}

if (isset($_POST["AjaxAction"]) && $_POST["AjaxAction"] == 'move') {
    echo File::move($_POST["AjaxPathMove"], $_POST["AjaxPath"]);
}
