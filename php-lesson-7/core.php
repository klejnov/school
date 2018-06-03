<?php


interface Loging
{
    function recordMethod();
}

/**
 * Автоматическая загрузка классов
 */

spl_autoload_register(function ($class_name) {
    include 'classes/' . $class_name . '.php';
});

$obj_db = new Database('logTableName');
$obj_file = new File('file.log');

$obj_file->recordMethod();
$obj_file->readFile();
