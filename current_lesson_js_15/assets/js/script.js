;

var card_body = document.querySelector('.card-body');
var hint = document.querySelector('.card>.hint');
var main = document.querySelector('.main');

function setToggle(event) {
    console.log(event);

    if (event.target.className == "card-header" && event.type != "mouseover" ) {
        event.target.parentNode.querySelector('.card-body').classList.toggle('card-body-height');
        event.target.querySelector('.fa').classList.toggle('fa-rotate-90');
        event.target.querySelector('.fa').classList.toggle('fa-spin');
        if (event.target.querySelector('.fa').classList.contains('fa-rotate-90')) {
            setTimeout(function (event) {
                event.target.querySelector('.fa').classList.toggle('fa-spin')
            }, 400, event);
        } else {
            event.target.querySelector('.fa').classList.toggle('fa-spin');
        }
    }

    if (event.target.tagName == "SPAN") {
        // console.log(event.type + " на " + event.currentTarget);
        // console.log(event.clientX + ":" + event.clientY);
        // получаем информацию об объекте card_body. В частности координаты верхнего левого угла
        //card_body.getBoundingClientRect();

        var top = event.clientY - card_body.getBoundingClientRect().y - 35;
        var left = event.clientX - card_body.getBoundingClientRect().x - 25;
        hint.style.top = top + 'px';
        hint.style.left = left + 'px';
        console.log(event.target.getAttribute('data-title') + " на " + event.currentTarget);
        hint.innerHTML = event.target.getAttribute('data-title');
        setTimeout("hint.style.display = 'block'", 500);
    }
}

function hideHint() {
    hint.style.display = "none";
}

main.addEventListener("click", setToggle);
main.addEventListener("mouseover", setToggle);
main.addEventListener("mousemove", hideHint);


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
