<?php

// Так работает если пути к файлу прописаны в Windows:
// $fileName = explode("\\", __FILE__);

// А это универсальный вариант на реальном сервере и на Windows
$fileName = explode(DIRECTORY_SEPARATOR, realpath(__FILE__));
echo "<h2>" . $fileName[count($fileName) - 1] . "</h2>";

function bash()
{
    $html = file_get_contents("http://bash.im/random");
    $html = iconv('cp1251', 'utf-8', $html);
    preg_match("/div class=\"text\">(.*?)<\/div>/ms", $html, $bashText);

    return $bashText[1];
    $html = iconv('cp1251', 'utf-8', $html);

}

echo bash();
