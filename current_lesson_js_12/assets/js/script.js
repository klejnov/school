;

var arr_id = ["id1", "id2", "id3", "id4", "id5", "id6", "id7", "id8", "id9", "id10", "id11", "id12", "id13"];
var random_card = document.getElementById('random-card');

// Сгенерируем 5 случайных карт
function generateRandomCart() {
    for (var i = 0; i <= 4; i++) {
        var random_id = Math.floor(Math.random() * arr_id.length);
        console.log(arr_id[random_id]);
        random_card.innerHTML += '<div class="card"  data-karta="' + arr_id[random_id] + '"><img src="img/' + arr_id[random_id] + '.jpg" alt="Карта ' + arr_id[random_id] + '"><img class="cover" src="img/cover.jpg" alt="Обложка"></div>';
    }
}

// Фунеция для генерации нижнего поля всех карт
function generateCart() {
    for (var i = 1; i <= 13; i++) {
        document.getElementsByClassName('select-card')[0].innerHTML += '<img src="img/id' + i + '.jpg" alt="Карта ' + i + '" data-karta="id' + i + '" onclick="select_carts(\'id' + i + '\')">';
        document.getElementById('random-text').innerHTML = 'Случайная карта это? Выбирите:';
    }
}

generateRandomCart();

// Эффект барабана
var random_card_random = 0;
function jump_cart_random() {
    random_card_random = 10 + Math.floor(Math.random() * 20);
    console.log('Количество итераций: ' + random_card_random);
    return random_card_random;
}
jump_cart_random();

function jump_cart(y) {

    setTimeout(function (y) {

        if (y == random_card_random) {
            generateCart();
            document.getElementById('random-text').style.display = 'inline-block';
        }

        if (y < random_card_random) {

            var elements = random_card.querySelectorAll('.card');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.paddingBottom = '0px';
                elements[i].dataset.id = '0';
                elements[i].getElementsByTagName('img')[0].className = "";;
            }

            random_card.getElementsByClassName('card')[y % 5].style.paddingBottom = '20px';
            random_card.getElementsByClassName('card')[y % 5].dataset.id = '1';
            random_card.getElementsByClassName('card')[y % 5].getElementsByTagName('img')[0].className = "hover";

            jump_cart(y + 1);
            console.log(y);
        }

    }, y * 10, y);
}

jump_cart(0);

function restart() {
    document.getElementsByClassName('select-card')[0].innerHTML = '';
    document.getElementById('random-card').innerHTML = '';
    document.getElementById('random-text').style.display = 'none';
    document.getElementById('random-text').innerHTML = 'Случайная карта это? Выбирите:';
    jump_cart_random();
    generateRandomCart();
    jump_cart(0);

}


function select_carts(id_cart) {
    var select_cart = id_cart;
    console.log('Вы выбрали карту: ' + select_cart);

    //покажем карты
    var elements = random_card.querySelectorAll('.cover');

    document.getElementsByClassName('fingerprint-spinner')[0].style.display = 'block';

    function func1() {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.opacity = '0';
        }
        document.getElementsByClassName('fingerprint-spinner')[0].style.display = 'none';
    }
    setTimeout(func1, 2500);

    var random_cart_id = document.getElementById('random-card').querySelectorAll('[data-id="1"]')[0].dataset.karta;
    console.log('Случайная карта: ' + random_cart_id);

    function func2() {
        if (select_cart == random_cart_id) {
            document.getElementById('random-text').innerHTML = '<span class="green">Вы угадали!</span>';
        } else {
            document.getElementById('random-text').innerHTML = '<span class="red">Вы ошиблись!</span>';
        }
    }
    setTimeout(func2, 3500);

}


//вывод кода в textarea (подключен jQuery v3.3.1 для работы с ajax)
var code_js;
$.ajax({
    url: "js/script.js",
    dataType: "text",
    async: true,
    success: function (msg) {
        code_js = msg;
        document.getElementById("code").innerHTML = code_js;
    }
});
