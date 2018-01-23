;

var questionOne = 'Напишите фамилию первого президента Беларуси';
var questionTwo = 'Как звучит фраза? Напишите вместо *** правильное слово: \n\n *** - всему голова!\n';
var questionThree = 'Как правильно: Беларусь или Белоруссия?';
var questionFour = '"В Беларуси три столицы: Минск, *** и Плещеницы."\nНапишите вместо *** пропущенное слово';
var questionFive = 'В каком году начали строить Бобруйскую крепость?';


var answerOne = prompt(questionOne, '');
switch (answerOne) {
    case 'Лукашенко':
    case 'Батя':
        alert('Ответ верный!');
        var result = 1;
        var correctlyOne = true;
        break;

    default:
        alert('Вы ошиблись!');
        var result = 0;
}

var answerTwo = prompt(questionTwo, '');
switch (answerTwo) {
    case 'Лукашенко':
    case 'Хлеб':
    case 'хлеб':
        alert('Ответ верный!');
        result += 1;
        var correctlyTwo = true;
        break;

    default:
        alert('Вы ошиблись!');
}

var answerThree = prompt(questionThree, '');
switch (answerThree) {
    case 'Беларусь':
        alert('Ответ верный!');
        result += 1;
        var correctlyThree = true;
        break;
    case 'Белоруссия':
        alert('Конечно же Беларусь! Это нужно знать! Минус 1 бал.');
        result -= 1;
        break;

    default:
        alert('Вы ошиблись!');
}

var answerFour = prompt(questionFour, '');
switch (answerFour) {
    case 'Бобруйск':
        alert('Правильно! Это Бобруйск!');
        result += 1;
        var correctlyFour = true;
        break;

    default:
        alert('Вы ошиблись! Это Бобруйск');
}

var answerFive = prompt(questionFive, '');
switch (answerFive) {
    case '1810':
        alert('Ответ верный! Вы знаток истории!');
        result += 1;
        var correctlyFive = true;
        break;
    case '1812':
        alert('Строительство начато в 1810 году, крепость сыграла существенную роль в Отечественной Войне 1812 года.');
        break;

    default:
        alert('Вы ошиблись!');
}

if (result == -1) {
    document.getElementById("result").innerHTML = 'Вы ответили на <span class="red">0</span> из 5 вопросов';
} else {
    document.getElementById("result").innerHTML = 'Вы ответили на <span class="red">' + result + '</span> из 5 вопросов';
}


if (result > 4) {
    var addClass = document.getElementById("image");
    addClass.className += " perfectly";
} else if (3 <= result && result <= 4) {
    var addClass = document.getElementById("image");
    addClass.className += " nice";
} else {
    var addClass = document.getElementById("image");
    addClass.className += " bad";
}
document.getElementById("totals").innerHTML = 'Итоги';

document.getElementById("totals-questionOne").innerHTML = 'На вопрос <span class="orange">' + questionOne + '</span> Вы дали ответ:<br><span class="blue">' + answerOne + '</span>';
if (correctlyOne == true) {
    document.getElementById("correctlyOne").innerHTML = '<span class="green">Ответ верный!</span>';
} else {
    document.getElementById("correctlyOne").innerHTML = '<span class="red">Вы ошиблись!</span> Правильный ответ: Лукашенко';
}

document.getElementById("totals-questionTwo").innerHTML = 'На вопрос <span class="orange">' + questionTwo + '</span> Вы дали ответ:<br><span class="blue">' + answerTwo + '</span>';
if (correctlyTwo == true) {
    document.getElementById("correctlyTwo").innerHTML = '<span class="green">Ответ верный!</span>';
} else {
    document.getElementById("correctlyTwo").innerHTML = '<span class="red">Вы ошиблись!</span> Правильный ответ: Лукашенко, либо хлеб';
}

document.getElementById("totals-questionThree").innerHTML = 'На вопрос <span class="orange">' + questionThree + '</span> Вы дали ответ:<br><span class="blue">' + answerThree + '</span>';
if (correctlyThree == true) {
    document.getElementById("correctlyThree").innerHTML = '<span class="green">Ответ верный!</span>';
} else if (answerThree == 'Белоруссия') {
    document.getElementById("correctlyThree").innerHTML = '<span class="red">Вы ошиблись!</span> Правильный ответ: Беларусь. <span class="red">За "Белоруссия" у вас дополнительно снят 1 балл</span>';
} else {
    document.getElementById("correctlyThree").innerHTML = '<span class="red">Вы ошиблись!</span> Правильный ответ: Беларусь';
}

document.getElementById("totals-questionFour").innerHTML = 'На вопрос <span class="orange">' + questionFour + '</span> Вы дали ответ:<br><span class="blue">' + answerFour + '</span>';
if (correctlyFour == true) {
    document.getElementById("correctlyFour").innerHTML = '<span class="green">Ответ верный!</span>';
} else {
    document.getElementById("correctlyFour").innerHTML = '<span class="red">Вы ошиблись!</span> Правильный ответ: Бобруйск';
}

document.getElementById("totals-questionFive").innerHTML = 'На вопрос <span class="orange">' + questionFive + '</span> Вы дали ответ:<br><span class="blue">' + answerFive + '</span>';
if (correctlyFive == true) {
    document.getElementById("correctlyFive").innerHTML = '<span class="green">Ответ верный!</span>';
} else {
    document.getElementById("correctlyFive").innerHTML = '<span class="red">Вы ошиблись!</span> Правильный ответ: 1810';
}

