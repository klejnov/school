<?php

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

    if (isset($_POST["AjaxSearch"])) {

        $db = new DataBase();

        $search = $_POST["AjaxSearch"];

        $albums = $db->searchAlbums($search);

        foreach ($albums as $key => $value) {

            $id = $value['album_id'];

            $tracks = $db->searchTracks($search, $id);

            if (count($tracks)) {
                $albums[$key]['tracks'] = $tracks;
            }

        }

        echo json_encode($albums);
    }

} catch (Throwable $e) {
    print <<<HTML_BLOCK
Выброшено исключение:   <b>{$e->getMessage()}</b><br>
Строка:                 <b>{$e->getLine()}</b><br>
В файле:                <b>{$e->getFile()}</b><br>
HTML_BLOCK;
}
