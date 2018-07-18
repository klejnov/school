<?php

$serverName = 'localhost';
$userName = 'user';
$password = 'petro123';
$dbName = 'music_box';

try {
    $conn = new PDO("mysql:host=$serverName", $userName, $password);
    $conn->exec("set names utf8");

    $sql = "DROP DATABASE IF EXISTS $dbName;
            CREATE DATABASE $dbName CHARACTER SET utf8 COLLATE utf8_general_ci;";
    $conn->exec($sql);
    echo "База $dbName создана <br><br>";

    $conn = new PDO("mysql:host=$serverName;dbname=$dbName", $userName, $password);
    $conn->exec("set names utf8");
    $sql = "CREATE TABLE track (
  track_id MEDIUMINT(7) unsigned NOT NULL AUTO_INCREMENT,
  track_name tinytext COLLATE utf8_unicode_ci,
  singer MEDIUMINT(7) unsigned NOT NULL COMMENT 'Исполнитель',
  album MEDIUMINT(7) unsigned NOT NULL COMMENT 'Альбом',
  duration MEDIUMINT(7) unsigned NOT NULL COMMENT 'Длительность',
  year YEAR(4) unsigned NOT NULL COMMENT 'Год выпуска',
  genre MEDIUMINT(7) unsigned NOT NULL COMMENT 'Жанр',
  PRIMARY KEY (`track_id`), UNIQUE (`track_id`), INDEX( `singer`), INDEX( `album`), INDEX( `genre`),
  CHECK (duration > 1)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE='utf8_general_ci';";
    $conn->exec($sql);
    echo "Таблица track создана <br><br>";

    $sql = "CREATE TABLE singer (
  singer_id MEDIUMINT(7) unsigned NOT NULL AUTO_INCREMENT,
  singer_name tinytext NOT NULL COLLATE utf8_unicode_ci COMMENT 'Имя исполнителя',
  PRIMARY KEY (`singer_id`), UNIQUE (`singer_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE='utf8_general_ci';";
    $conn->exec($sql);
    echo "Таблица singer создана <br><br>";

    $sql = "CREATE TABLE genre (
  genre_id MEDIUMINT(7) unsigned NOT NULL AUTO_INCREMENT,
  genre_name tinytext NOT NULL COLLATE utf8_unicode_ci COMMENT 'Название жанра',
  PRIMARY KEY (`genre_id`), UNIQUE (`genre_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE='utf8_general_ci';";
    $conn->exec($sql);
    echo "Таблица genre создана <br><br>";

    $sql = "CREATE TABLE album (
  album_id MEDIUMINT(7) unsigned NOT NULL AUTO_INCREMENT,
  album_name tinytext NOT NULL COLLATE utf8_unicode_ci COMMENT 'Название альбома',
  singer MEDIUMINT(7) unsigned NOT NULL COMMENT 'Исполнитель',
  year YEAR(4) unsigned NOT NULL COMMENT 'Год выпуска',
  genre MEDIUMINT(7) unsigned NOT NULL COMMENT 'Жанр',
  PRIMARY KEY (`album_id`), UNIQUE (`album_id`), INDEX( `singer`), INDEX( `genre`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE='utf8_general_ci';";
    $conn->exec($sql);
    echo "Таблица album создана <br><br>";

    //Добавим связи между таблицами
    $sql = "
ALTER TABLE `track` ADD CONSTRAINT `FK_track_singer` FOREIGN KEY (`singer`) REFERENCES `singer` (`singer_id`);
ALTER TABLE `track` ADD CONSTRAINT `FK_track_album` FOREIGN KEY (`album`) REFERENCES `album` (`album_id`);
ALTER TABLE `track` ADD CONSTRAINT `FK_track_genre` FOREIGN KEY (`genre`) REFERENCES `genre` (`genre_id`);

ALTER TABLE `album` ADD CONSTRAINT `FK_album_singer` FOREIGN KEY (`singer`) REFERENCES `singer` (`singer_id`);
ALTER TABLE `album` ADD CONSTRAINT `FK_album_genre` FOREIGN KEY (`genre`) REFERENCES `genre` (`genre_id`);
    ";
    $conn->exec($sql);
    echo "Связи созданы <br><br>";


    //Добавим Исполнителей, Жанры, Альбомы, Песни.
    $sql = "
INSERT INTO `singer` (`singer_id`, `singer_name`) VALUES 
(NULL, 'Филипп Киркоров'), 
(NULL, 'Би-2'),
(NULL, 'Михаил Круг');
INSERT INTO `genre` (`genre_id`, `genre_name`) VALUES 
(NULL, 'Поп-музыка'), 
(NULL, 'Рок'),
(NULL, 'Альтернативный рок'),
(NULL, 'Русский шансон'),
(NULL, 'Авторская песня');
INSERT INTO `album` (`album_id`, `album_name`, `singer`, `year`, `genre`) VALUES 
(NULL, 'Незнакомка', '1', '2003', '1'), 
(NULL, 'Бесполая и грустная любовь', '2', '2004', '2'),
(NULL, 'Живая струна', '3', '1996', '3');
INSERT INTO `track` (`track_id`, `track_name`, `singer`, `album`, `duration`, `year`, `genre`) VALUES 
(NULL, 'Роза Чайная', '1', '1', '223', '2004', '1'), 
(NULL, 'Зайки врозь', '1', '1', '221', '2004', '1'), 
(NULL, 'Флейтист', '1', '1', '201', '2004', '1'), 
(NULL, 'Жестокая Любовь', '1', '1', '223', '2003', '1'), 
(NULL, 'Время', '2', '2', '203', '2004', '2'),
(NULL, 'Небо', '2', '2', '198', '2004', '2'),
(NULL, 'Отражение', '2', '2', '301', '2004', '2'),
(NULL, 'Время перемен', '2', '2', '354', '2004', '2'),
(NULL, 'Птицы', '2', '2', '437', '2004', '3'),
(NULL, 'Любовь и ненависть', '2', '2', '373', '2004', '3'),
(NULL, 'Здравствуй мама', '3', '3', '191', '1996', '4'),
(NULL, 'Я прошел сибирь', '3', '3', '170', '1996', '5');
    ";
    $conn->exec($sql);
    echo "Исполнители, Жанры, Альбомы, Песни созданы <br><br>";


    //Добавим триггер.
    $sql = "
CREATE TRIGGER `check_duration_INSERT` BEFORE INSERT  ON `track` 
			FOR EACH ROW BEGIN IF NEW.duration <= 0 THEN 
			SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Введите длительность трека больше нуля!'; 
			END IF; 
			END;

CREATE TRIGGER `check_duration_UPDATE` BEFORE UPDATE  ON `track` 
			FOR EACH ROW BEGIN IF NEW.duration <= 0 THEN 
			SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Введите длительность трека больше нуля!'; 
			END IF; 
			END;
            ";
    $conn->exec($sql);
    echo "Тригеры созданы <br><br>";

    //backup
    $today = date("Y.m.d_H-i-s");
    shell_exec("mysqldump -u$userName -p$password $dbName > dump_$today.sql");

} catch (PDOException $e) {

    echo "Ошибка запроса " . $sql . $e->getMessage();

}
