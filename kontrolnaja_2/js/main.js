 ;

var itemss = document.querySelectorAll('.itemss');
var coursesList = document.querySelectorAll('.courses-list');
var elem = document.querySelector('.courses-list-menu');

// Посчитаем кол-во элементов в каждой вкладке.
function countElements() {
    for (var i = 0; i < itemss.length; i++) {
        var sumElements = itemss[i].querySelectorAll('.courses-item').length;
        itemss[i].querySelector('span').innerHTML = sumElements;
        console.log(sumElements);
    }
}

countElements();

function clickLink(event) {

    if (event.target.tagName == 'H4' && event.target.nextElementSibling.classList.contains("courses-list")) {


        for (var i = 0; i < itemss.length; i++) {
            itemss[i].classList.remove('active');
        }

        for (var i = 0; i < coursesList.length; i++) {
            coursesList[i].classList.add('hidden');
        }

        event.target.parentNode.querySelector('.courses-list').classList.remove('hidden');

        setOpacity();

        function setOpacity() {
            event.target.parentNode.querySelector('.courses-list').style.opacity = 0;

            var i = 0;
            var timerId = setInterval(function () {
                event.target.parentNode.querySelector('.courses-list').style.opacity = ++i / 10;
                if (i == 10) {
                    clearInterval(timerId);
                }
            }, 60);
        }

        event.target.parentNode.classList.add('active');

        console.log('Клик по H4 (вкладка)');

        // выравним блоки внутри вкладки.
        var left = event.target.parentNode.querySelector('.courses-list').getBoundingClientRect().left;
        var left2 = event.currentTarget.getBoundingClientRect().left;

        if (left > left2) {
            event.target.parentNode.querySelector('.courses-list').style.left = -left + left2 + 'px';
        }

    }


    if (event.target.className == "courses-item" ||
        event.target.className == "course-form" ||
        event.target.tagName == "SPAN" ||
        event.target.tagName == "H4" ||
        event.target.tagName == "H3") {

        var target = event.target;

        // Отладочные if
        if (event.target.className == "courses-item") {
            console.log('Клик по courses-item 1');
        }
        if (event.target.tagName == "SPAN") {
            console.log('Клик по SPAN');
        }
        if (event.target.tagName == "H4") {
            console.log('Клик по H4 (карточка)');
        }

        // если кникнули "глубоко", то найдем нужный target, поднимаясь вверх.
        while (target != elem) {
            if (target.className == "courses-item") {

                var targetList = target.parentNode.querySelectorAll('.courses-item');
                var position = target.dataset.position;
                var max = targetList.length;

                for (var i = 0; i < targetList.length; i++) {
                    targetList[i].classList.remove('active');
                    if (targetList[i].dataset.position == max) {
                        targetList[i].dataset.position = position;
                    }
                }

                target.dataset.position = targetList.length;
                target.classList.add('active');

                console.log('Позиция карточки: ' + position);
                return;
            }
            target = target.parentNode;
        }
    }

    console.log('Клик по родителю');

}

elem.addEventListener("click", clickLink);
