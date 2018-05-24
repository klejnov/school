<?php

$info = array(
    "tel1" => "+375 (25) 555-55-55",
    "tel2" => "+375 (25) 555-55-44",
    "mail1" => "vasilev_igor@corporate.ru",
    "mail2" => "ivanov_pavel@corporate.ru"
);

function infoGet($info, $flag) {

    $telArr = [];
    $mailArr = [];

    foreach ($info as $key => $value) {
        if (preg_match("/tel/", $key)) {
            $phone = preg_replace("/[^0-9]/", '', $value);
            $telArr[] = [
                $key => $value,
                'phone' => "+" . $phone
            ];
        }

        if (preg_match("/mail/", $key)) {
            preg_match("/(.*?)@/", $value, $mail);
            $mailArr[] = [
                $key => $value,
                'mail' => $mail[1]
            ];
        }
    }

    if ($flag == 'tel') {
        echo json_encode($telArr);
    }
    if ($flag == 'mail') {
        echo json_encode($mailArr);
    }
}


if (isset($_POST["Ajax"]) && $_POST["Ajax"] == 'tel') {
    $flag = 'tel';
    infoGet($info, $flag);
}

if (isset($_POST["Ajax"]) && $_POST["Ajax"] == 'mail') {
    $flag = 'mail';
    infoGet($info, $flag);
}

if (isset($_POST["Ajax"]) && $_POST["Ajax"] == 'js') {
    echo json_encode($info);
}
