<?php

$question = [
  ['В каком году было первое письменное упоминание о Бобруйске?', '1387'],
  ['А как называется район на пересечении улиц Социалистической и Карла Маркса (бывшая Рыночная площадь). В первой половине XX-го века здесь происходил набор трудящегося люда на различные виды работ.', 'Биржа'],
  ['Именно бобруйчане так ласково называют Социалистическую улицу, некогда главную улицу Бобруйска (бывшая Муравьёвская)', 'Социалка'],
  ['Небольшая площадь между улицами Якуба Коласа, Механизаторов. Раньше на ней были продовольственный магазин, пивной ларёк', 'Пьяная площадь'],
  ['Район города, ранее военный городок «Бобруйск-17». Расположен между улицами Ванцетти, Парковой, Клубной перед Березинским форштадтом. Этим названием называли и дискотеку в этом военном городке, на которую трудно было попасть городской молодёжи. Назовите район.', 'Авиагородок'],
];

function questionGet($idAjax){
    global $question;

    if ($idAjax<count($question )) {
        $question1[0] = $question[$idAjax][0];
        $return["json"] = json_encode($question1, JSON_UNESCAPED_UNICODE);
        echo json_encode($return, JSON_UNESCAPED_UNICODE);
    } else {
        echo '{}';
    }

};

function questionCheck($idAjax, $replyAjax){
    global $question;
    $question1[0] = $question[$idAjax][0];

    if (mb_strtoupper($replyAjax) == mb_strtoupper($question[$idAjax][1])) {
        $question1[1] = 1;
    } else {
        $question1[1] = 0;
    }

    $question1[2] = count($question);

    $return["json"] = json_encode($question1, JSON_UNESCAPED_UNICODE);
    echo json_encode($return, JSON_UNESCAPED_UNICODE);
};

if (isset($_POST["idAjax1"]) && $_POST["idAjax1"]<=count($question)){

    questionGet($_POST["idAjax1"]);

}

if (isset($_POST["replyAjax"]) && $_POST["idAjax2"]<count($question)){

    questionCheck($_POST["idAjax2"], $_POST["replyAjax"]);

}
