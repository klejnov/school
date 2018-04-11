;


function findSelector(event) {

    var button = event.target.value;
    console.log('Нажата: ' + button);
    $('*').attr('style', '');
    
    if (button == "Задание 1") {
        $('.red, ul').css('color', 'red');
    }
    if (button == "Задание 2") {
        $('div p').css('color', 'blue');
    }
    if (button == "Задание 3") {
        $('p:has(img) strong').css('fontStyle', 'italic');
    }
    if (button == "Задание 4") {
        $('.blocks > div').css('background', 'indigo');
    }
}

$('input').on('click', findSelector);