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
    public function __construct(){
        $this->connect();
    }

    private function connect(){
        $config = require_once 'config.php';
        $dns = 'mysql:host='.$config['host'].';dbname='.$config['db_name'].';charset='.$config['charset'];
        $this->link = new PDO($dns, $config['username'], $config['password']);
        return $this;
    }

    public  function execute($sql){
        $sth = $this->link->prepare($sql);
        return $sth->execute();
    }

    public function query($sql){
        $sth = $this->link->prepare($sql);
        $sth->execute();
        $result = $sth->fetchALL(PDO::FETCH_ASSOC);
        if($result === false){
            return[];
        }
        return $result;
    }
    public  function backup($dbName){
        $config = include 'config.php';
        $today = date("Y.m.d_H-i-s");
        $dir = __DIR__;
        shell_exec("mysqldump -u{$config['username']} -p{$config['password']} $dbName > $dir/../backup/dump_$today.sql");
    }

}
