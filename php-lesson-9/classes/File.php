<?php

/**
 * Class File
 * приложение «Файловый менеджер», позволяющее отображать содержимое пользовательской папки на сервере,
 * создавать/переименовывать/удалять папки
 * загружать/переименовывать/перемещать/удалять файлы.
 */


class File
{
    /*
   * проверка, чтобы пользователь не мог подняться выше директории загрузки файлов
    * плюс защита от путей вида:
    * $path = 'files/../222222222222/../777/../../../../..';
   */

    static function checkPath($path)
    {

        $arrayPath = explode("/", $path);

        if ($arrayPath[0] != 'files') {
            return;
        }

        if ($arrayPath[count($arrayPath) - 1] == '..') {

            foreach ($arrayPath as $value) {

                if ($value != '..') {
                    $arrayPathFilter[] = $value;
                }
            }
            array_splice($arrayPathFilter, -1, count($arrayPathFilter));
            $path = implode("/", $arrayPathFilter);

        }

        return $path;

    }

    static function getList($path)
    {

        $path = File::checkPath($path);

        $scanned_directory = array_diff(scandir($path), array('.', '.htaccess'));

        foreach ($scanned_directory as $key => $directory) {

            if (is_dir($path . DS . $directory)) {
                $scanned_directory[$key] = array('name' => $directory, 'type' => 'dir');
            } else {
                $scanned_directory[$key] = array('name' => $directory, 'type' => 'file');;
            }
        }

        // Функция сортировки по имени в двумерном массиве:
        function name_sort($x, $y)
        {
            return strcasecmp($x['type'], $y['type']);
        }

        uasort($scanned_directory, 'name_sort');
        $scanned_directory = array_values($scanned_directory);

        return json_encode(array("list" => $scanned_directory, "path" => $path));
    }

    static function remove($name)
    {

        if (preg_match("/\.\.$/", $name) || preg_match("/\.htaccess$/", $name)) {
            return json_encode('Действия с данным объектом запрещены');
        }

        $dir = File::checkPath($name);

        if (is_dir($dir)) {

            /*
             * Рекурсивное удаление
             */

            $dirDel = $dir;
            function delTree($dirDel)
            {
                $files = array_diff(scandir($dirDel), array('.', '..'));
                foreach ($files as $file) {
                    (is_dir("$dirDel/$file")) ? delTree("$dirDel/$file") : unlink("$dirDel/$file");
                }
                rmdir($dirDel);
            }

            delTree($dirDel);
            return json_encode('Директория удалена');

            /*
             * Обычное удаление
             */
//            rmdir($dir . DS . $name);
//            return json_encode('Директория удалена');

        }

        if (!is_dir($dir)) {
            unlink($dir);
            return json_encode('Файл удален');
        }

    }

    static function rename($oldName, $newName)
    {

        if (preg_match("/\.\.$/", $oldName)) {
            return json_encode('Действия с данным объектом запрещены');
        }

        $oldName = File::checkPath($oldName);
        $newName = File::checkPath($newName);

        if (file_exists($newName)) {
            return json_encode('Файл или каталог с таким именем уже существуют');
        }
        rename($oldName, $newName);
        return json_encode('Переименование завершено');

    }

    static function createDirectory($dirName)
    {

        $dirName = File::checkPath($dirName);

        if (file_exists($dirName)) {
            return json_encode('Каталог с таким уже существует');
        } else {
            mkdir($dirName, 0755);
            return json_encode('Каталог создан');
        }

    }

    static function upload($dir)
    {
        $dir = File::checkPath($dir);;

        if (strlen($_FILES['file']['name']) == true) {

            if (file_exists($dir . DS . $_FILES['file']['name'])) {
                return json_encode(3);
            }

            move_uploaded_file($_FILES['file']['tmp_name'], $dir . DS . $_FILES['file']['name']);


            return json_encode(1);
        } else {

            return json_encode(0);
        }

    }


    static function move($pathMove, $path)
    {

        $arrayPath = explode("/", $pathMove);
        $path = $path . DS . $arrayPath[count($arrayPath) - 1];

        if (preg_match("/\.\.$/", $pathMove)) {
            return json_encode('Действия с данным объектом запрещены');
        }

        $pathMove = File::checkPath($pathMove);
        $path = File::checkPath($path);

        if (file_exists($path)) {
            return json_encode('Файл или каталог с таким именем уже существуют');
        }
        rename($pathMove, $path);
        return json_encode('Перемещение завершено');

    }

}
