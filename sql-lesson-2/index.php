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
    echo '<pre>';
    $db = new DataBase();

    $sql = "SELECT `track_id`, 
                    `track_name`, 
                    `singer_name`, 
                    `album_name`, 
                    `genre_name` 
            FROM `track` T 
            LEFT JOIN (singer S, album A, genre G) 
            on (S.singer_id = T.singer AND A.album_id = T.album AND G.genre_id = T.genre)";
    $track = $db->query($sql);

    echo "<h3>Задание 1. Список всех треков, с указанием жанра, альбома и исполнителя</h3>";
    echo "Запрос к БД: <b style='color: red'>$sql</b><br>Результат:<br><br>";
    print_r($track);


    $sql = "SELECT  album_id, 
                    album_name,
                    singer.singer_name,
                    (SELECT COUNT(*) FROM track WHERE track.album=album.album_id) count_track 
            FROM `album` 
            LEft JOIN (singer) on (album.singer=singer.singer_id)";
    $track = $db->query($sql);

    echo "<h3>Задание 2. Список альбомов с указанием исполнителя и количества треков в альбоме</h3>";
    echo "Запрос к БД: <b style='color: red'>$sql</b><br>Результат:<br><br>";
    print_r($track);


    $sql = "SELECT *, 
                    (SELECT GROUP_CONCAT(DISTINCT genre.genre_name separator ', ') 
                      FROM track 
                      LEFT JOIN genre on genre.genre_id=track.genre 
                      WHERE track.singer=singer.singer_id) concat_signer
            FROM `singer`
";
    $track = $db->query($sql);

    echo "<h3>Задание 3. Список всех исполнителей с перечислением (все в одной ячейке) жанров его треков</h3>";
    echo "Запрос к БД: <b style='color: red'>$sql</b><br>Результат:<br><br>";
    print_r($track);


    $sql = "SELECT *, 
                    (SELECT track.track_name 
                      FROM track 
                      WHERE track.track_id = (SELECT track.track_id FROM track WHERE singer.singer_id = track.singer ORDER BY track.duration DESC LIMIT 1)) max_duration_track 
            FROM `singer` 
";
    $track = $db->query($sql);

    echo "<h3>Задание 4. Список исполнителей с треком, самым большим по продолжительности</h3>";
    echo "Запрос к БД: <b style='color: red'>$sql</b><br>Результат:<br><br>";
    print_r($track);


    $sql = "SELECT album_id, album_name, 
                (SELECT round(AVG(track.duration),1) FROM track WHERE track.album=album.album_id) AVG,
                (SELECT SUM(track.duration) FROM track WHERE track.album=album.album_id) SUM,
                (SELECT MAX(track.duration) FROM track WHERE track.album=album.album_id) MAX,
                (SELECT MIN(track.duration) FROM track WHERE track.album=album.album_id) MIN
            FROM `album`";
    $track = $db->query($sql);

    echo "<h3>Задание 5. Список альбомов со средним, общим, максимальным и минимальным временем продолжительности трека в каждом альбоме</h3>";
    echo "Запрос к БД: <b style='color: red'>$sql</b><br>Результат:<br><br>";
    print_r($track);


    echo '</pre>';

    //вызов метода для созранения резервной копии базы данных.
    $db->backup('music_box');

} catch (Throwable $e) {
    print <<<HTML_BLOCK
Выброшено исключение:   <b>{$e->getMessage()}</b><br>
Строка:                 <b>{$e->getLine()}</b><br>
В файле:                <b>{$e->getFile()}</b><br>
HTML_BLOCK;
}
