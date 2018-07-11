-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июл 11 2018 г., 23:48
-- Версия сервера: 5.7.22-0ubuntu18.04.1
-- Версия PHP: 7.2.7-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `music_box`
--

-- --------------------------------------------------------

--
-- Структура таблицы `album`
--

CREATE TABLE `album` (
  `album_id` mediumint(7) UNSIGNED NOT NULL,
  `album_name` tinytext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Название альбома',
  `singer` mediumint(7) UNSIGNED NOT NULL COMMENT 'Исполнитель',
  `year` year(4) NOT NULL COMMENT 'Год выпуска',
  `genre` mediumint(7) UNSIGNED NOT NULL COMMENT 'Жанр'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `album`
--

INSERT INTO `album` (`album_id`, `album_name`, `singer`, `year`, `genre`) VALUES
(1, 'Незнакомка', 1, 2003, 1),
(2, 'Бесполая и грустная любовь', 2, 2004, 2),
(3, 'Живая струна', 3, 1996, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `genre`
--

CREATE TABLE `genre` (
  `genre_id` mediumint(7) UNSIGNED NOT NULL,
  `genre_name` tinytext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Название жанра'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `genre`
--

INSERT INTO `genre` (`genre_id`, `genre_name`) VALUES
(1, 'Поп-музыка'),
(2, 'Рок'),
(3, 'Альтернативный рок'),
(4, 'Русский шансон'),
(5, 'Авторская песня');

-- --------------------------------------------------------

--
-- Структура таблицы `singer`
--

CREATE TABLE `singer` (
  `singer_id` mediumint(7) UNSIGNED NOT NULL,
  `singer_name` tinytext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Имя исполнителя'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `singer`
--

INSERT INTO `singer` (`singer_id`, `singer_name`) VALUES
(1, 'Филипп Киркоров'),
(2, 'Би-2'),
(3, 'Михаил Круг');

-- --------------------------------------------------------

--
-- Структура таблицы `track`
--

CREATE TABLE `track` (
  `track_id` mediumint(7) UNSIGNED NOT NULL,
  `track_name` tinytext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `singer` mediumint(7) UNSIGNED NOT NULL COMMENT 'Исполнитель',
  `album` mediumint(7) UNSIGNED NOT NULL COMMENT 'Альбом',
  `duration` mediumint(7) UNSIGNED NOT NULL COMMENT 'Длительность',
  `year` year(4) NOT NULL COMMENT 'Год выпуска',
  `genre` mediumint(7) UNSIGNED NOT NULL COMMENT 'Жанр'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `track`
--

INSERT INTO `track` (`track_id`, `track_name`, `singer`, `album`, `duration`, `year`, `genre`) VALUES
(1, 'Роза Чайная', 1, 1, 223, 2004, 1),
(2, 'Зайки врозь', 1, 1, 221, 2004, 1),
(3, 'Флейтист', 1, 1, 201, 2004, 1),
(4, 'Время', 2, 2, 203, 2004, 2),
(5, 'Небо', 2, 2, 198, 2004, 2),
(6, 'Отражение', 2, 2, 301, 2004, 2),
(7, 'Время перемен', 2, 2, 354, 2004, 2),
(8, 'Птицы', 2, 2, 437, 2004, 3),
(9, 'Здравствуй мама', 3, 3, 191, 1996, 4),
(10, 'Я прошел сибирь', 3, 3, 170, 1996, 5);

--
-- Триггеры `track`
--
DELIMITER $$
CREATE TRIGGER `check_duration_INSERT` BEFORE INSERT ON `track` FOR EACH ROW BEGIN IF NEW.duration <= 0 THEN 
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Введите длительность трека больше нуля!'; 
            END IF; 
            END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `check_duration_UPDATE` BEFORE UPDATE ON `track` FOR EACH ROW BEGIN IF NEW.duration <= 0 THEN 
			SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Введите длительность трека больше нуля!'; 
			END IF; 
			END
$$
DELIMITER ;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`album_id`),
  ADD UNIQUE KEY `album_id` (`album_id`),
  ADD KEY `singer` (`singer`),
  ADD KEY `genre` (`genre`);

--
-- Индексы таблицы `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`genre_id`),
  ADD UNIQUE KEY `genre_id` (`genre_id`);

--
-- Индексы таблицы `singer`
--
ALTER TABLE `singer`
  ADD PRIMARY KEY (`singer_id`),
  ADD UNIQUE KEY `singer_id` (`singer_id`);

--
-- Индексы таблицы `track`
--
ALTER TABLE `track`
  ADD PRIMARY KEY (`track_id`),
  ADD UNIQUE KEY `track_id` (`track_id`),
  ADD KEY `singer` (`singer`),
  ADD KEY `album` (`album`),
  ADD KEY `genre` (`genre`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `album`
--
ALTER TABLE `album`
  MODIFY `album_id` mediumint(7) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `genre`
--
ALTER TABLE `genre`
  MODIFY `genre_id` mediumint(7) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `singer`
--
ALTER TABLE `singer`
  MODIFY `singer_id` mediumint(7) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `track`
--
ALTER TABLE `track`
  MODIFY `track_id` mediumint(7) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `album`
--
ALTER TABLE `album`
  ADD CONSTRAINT `FK_album_genre` FOREIGN KEY (`genre`) REFERENCES `genre` (`genre_id`),
  ADD CONSTRAINT `FK_album_singer` FOREIGN KEY (`singer`) REFERENCES `singer` (`singer_id`);

--
-- Ограничения внешнего ключа таблицы `track`
--
ALTER TABLE `track`
  ADD CONSTRAINT `FK_track_album` FOREIGN KEY (`album`) REFERENCES `album` (`album_id`),
  ADD CONSTRAINT `FK_track_genre` FOREIGN KEY (`genre`) REFERENCES `genre` (`genre_id`),
  ADD CONSTRAINT `FK_track_singer` FOREIGN KEY (`singer`) REFERENCES `singer` (`singer_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
