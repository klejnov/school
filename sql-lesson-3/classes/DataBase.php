<?php
/**
 * Connection MySQL
 */

class DataBase
{
    private $link;

    /**
     * Connection constructor.
     */
    public function __construct()
    {
        $this->connect();
    }

    /**
     * @return $this
     */
    private function connect()
    {
        $config = require_once 'config.php';
        $dsn = 'mysql:host=' . $config['host'] . ';dbname=' . $config['db_name'] . ';charset=' . $config['charset'];
        $this->link = new PDO($dsn, $config['username'], $config['password']);
        $this->link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->link->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        return $this;
    }

    /**
     * @param $sql
     * @return mixed
     */
    public function execute($sql)
    {
        $sth = $this->link->prepare($sql);
        return $sth->execute();
    }

    /**
     * @param $sql
     * @return array
     */
    public function query($sql)
    {
        $sth = $this->link->prepare($sql);
        $sth->execute();
        $result = $sth->fetchALL(PDO::FETCH_ASSOC);
        if ($result === false) {
            return [];
        }
        return $result;
    }

    /**
     * @param $search
     * @return array
     *
     * Search for music albums
     */
    public function searchAlbums($search)
    {
        $sth = $this->link->prepare("SELECT  album_id, 
                    album_name,
                    singer.singer_name,
                    year,
                    (SELECT genre_name FROM genre WHERE genre.genre_id=album.genre) AS albom_genre
            FROM album 
            LEFT JOIN (singer) on (album.singer=singer.singer_id) 
            WHERE (SELECT COUNT(*) FROM track WHERE track.album=album.album_id AND track.track_name LIKE :sql_search) >0;");

        $sth->execute([
            'sql_search' => "%{$search}%",
        ]);

        $result = $sth->fetchALL(PDO::FETCH_ASSOC);

        if ($result === false) {
            return [];
        }
        return $result;
    }

    /**
     * @param $search
     * @param $id
     * @return array
     *
     * Track search by id
     */
    public function searchTracks($search, $id)
    {

        $sth = $this->link->prepare("SELECT track_name, 
                            duration, 
                            year, 
                            (SELECT genre_name FROM genre WHERE genre.genre_id=track.genre) AS genre_track 
                          FROM `track` 
                          WHERE album = :sql_id AND track_name LIKE :sql_search;");
        $sth->execute([
            'sql_search' => "%{$search}%",
            'sql_id' => $id,
        ]);
        $result = $sth->fetchALL(PDO::FETCH_ASSOC);
        if ($result === false) {
            return [];
        }
        return $result;
    }

    /**
     * @param $dbName
     *
     * Backing up the database in the directory /../backup/
     */
    public function backup($dbName)
    {
        $config = include 'config.php';
        $today = date("Y.m.d_H-i-s");
        $dir = __DIR__;
        shell_exec("mysqldump -u{$config['username']} -p{$config['password']} $dbName > $dir/../backup/dump_$today.sql");
    }

}
