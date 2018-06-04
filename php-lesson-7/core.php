<?php

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

$objDB = new Database('logTableName');
$objFile = new File('file.log');

$objFile->recordMethod();
$objFile->readFile();

/**
 * Метод для очистки лог файла
 */
//$objFile->clearFile();
