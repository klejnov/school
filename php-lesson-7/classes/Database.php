<?php

class Database implements Loging
{

    private $tableName;

    function recordMethod()
    {
        echo '<br><b>Имя класса: </b>' . __CLASS__ . "<br>";
        echo $this->tableName . "<br>";
    }

    public function __construct($tableName)
    {
        $this->tableName = $tableName;
        $this->recordMethod();

    }

}