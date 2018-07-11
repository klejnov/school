-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: music_box
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `album` (
  `album_id` mediumint(7) unsigned NOT NULL AUTO_INCREMENT,
  `album_name` tinytext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Название альбома',
  `singer` mediumint(7) unsigned NOT NULL COMMENT 'Исполнитель',
  `year` year(4) NOT NULL COMMENT 'Год выпуска',
  `genre` mediumint(7) unsigned NOT NULL COMMENT 'Жанр',
  PRIMARY KEY (`album_id`),
  UNIQUE KEY `album_id` (`album_id`),
  KEY `singer` (`singer`),
  KEY `genre` (`genre`),
  CONSTRAINT `FK_album_genre` FOREIGN KEY (`genre`) REFERENCES `genre` (`genre_id`),
  CONSTRAINT `FK_album_singer` FOREIGN KEY (`singer`) REFERENCES `singer` (`singer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` VALUES (1,'Незнакомка',1,2003,1),(2,'Бесполая и грустная любовь',2,2004,2),(3,'Живая струна',3,1996,3);
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genre` (
  `genre_id` mediumint(7) unsigned NOT NULL AUTO_INCREMENT,
  `genre_name` tinytext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Название жанра',
  PRIMARY KEY (`genre_id`),
  UNIQUE KEY `genre_id` (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'Поп-музыка'),(2,'Рок'),(3,'Альтернативный рок'),(4,'Русский шансон'),(5,'Авторская песня');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `singer`
--

DROP TABLE IF EXISTS `singer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `singer` (
  `singer_id` mediumint(7) unsigned NOT NULL AUTO_INCREMENT,
  `singer_name` tinytext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'Имя исполнителя',
  PRIMARY KEY (`singer_id`),
  UNIQUE KEY `singer_id` (`singer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `singer`
--

LOCK TABLES `singer` WRITE;
/*!40000 ALTER TABLE `singer` DISABLE KEYS */;
INSERT INTO `singer` VALUES (1,'Филипп Киркоров'),(2,'Би-2'),(3,'Михаил Круг');
/*!40000 ALTER TABLE `singer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `track`
--

DROP TABLE IF EXISTS `track`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `track` (
  `track_id` mediumint(7) unsigned NOT NULL AUTO_INCREMENT,
  `track_name` tinytext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `singer` mediumint(7) unsigned NOT NULL COMMENT 'Исполнитель',
  `album` mediumint(7) unsigned NOT NULL COMMENT 'Альбом',
  `duration` mediumint(7) unsigned NOT NULL COMMENT 'Длительность',
  `year` year(4) NOT NULL COMMENT 'Год выпуска',
  `genre` mediumint(7) unsigned NOT NULL COMMENT 'Жанр',
  PRIMARY KEY (`track_id`),
  UNIQUE KEY `track_id` (`track_id`),
  KEY `singer` (`singer`),
  KEY `album` (`album`),
  KEY `genre` (`genre`),
  CONSTRAINT `FK_track_album` FOREIGN KEY (`album`) REFERENCES `album` (`album_id`),
  CONSTRAINT `FK_track_genre` FOREIGN KEY (`genre`) REFERENCES `genre` (`genre_id`),
  CONSTRAINT `FK_track_singer` FOREIGN KEY (`singer`) REFERENCES `singer` (`singer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `track`
--

LOCK TABLES `track` WRITE;
/*!40000 ALTER TABLE `track` DISABLE KEYS */;
INSERT INTO `track` VALUES (1,'Роза Чайная',1,1,223,2004,1),(2,'Зайки врозь',1,1,221,2004,1),(3,'Флейтист',1,1,201,2004,1),(4,'Время',2,2,203,2004,2),(5,'Небо',2,2,198,2004,2),(6,'Отражение',2,2,301,2004,2),(7,'Время перемен',2,2,354,2004,2),(8,'Птицы',2,2,437,2004,3),(9,'Здравствуй мама',3,3,191,1996,4),(10,'Я прошел сибирь',3,3,170,1996,5);
/*!40000 ALTER TABLE `track` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`user`@`localhost`*/ /*!50003 TRIGGER `check_duration_INSERT` BEFORE INSERT  ON `track` 
            FOR EACH ROW BEGIN IF NEW.duration <= 0 THEN 
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Введите длительность трека больше нуля!'; 
            END IF; 
            END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`user`@`localhost`*/ /*!50003 TRIGGER `check_duration_UPDATE` BEFORE UPDATE  ON `track` 
			FOR EACH ROW BEGIN IF NEW.duration <= 0 THEN 
			SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Введите длительность трека больше нуля!'; 
			END IF; 
			END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-11 23:11:39
