<?php

class File implements Loging
{
    private $fileName;

    public function recordMethod()
    {
        echo '<br><b>Имя класса: </b>' . __CLASS__ . "<br>";
        echo $this->fileName . "<br>";

        $str = date("Y-m-d H:i:s") . " -> Cлучайное число: " . random_int(0, 1000) . " IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
        $new_file = fopen($this->fileName, "a");
        fwrite($new_file, $str);
        fclose($new_file);
    }

    public function readFile()
    {
        $lines = file($this->fileName);
        foreach ($lines as $line_num => $line) {
            $line_num += 1;
            echo "<pre>Строка #<b>{$line_num}</b> : " . htmlspecialchars($line) . "</pre>";
        }
    }

    public function clearFile()
    {
        fopen($this->fileName, "w");
    }

    public function __construct($fileName)
    {
        $this->fileName = $fileName;

    }

}