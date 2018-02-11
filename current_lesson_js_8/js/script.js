;

function getTransliteration(userString) {
    var userStringNew = [];
    var userStringTrans = '';

    var length = userString.length;
    console.log(userString.length);

    var stringRus = ["а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", " ", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "?", "!", ",", ".", "-", ":"];
    var stringLat = ["a", "b", "v", "g", "d", "e", "zh", "z", "i", "y", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "h", "ts", "ch", "sh", "sch", "'", "yi", "'", "e", "yu", "ya", " ", "A", "B", "V", "G", "D", "E", "ZH", "Z", "I", "Y", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "H", "TS", "CH", "SH", "SCH", "'", "YI", "'", "E", "YU", "YA", "?", "!", ",", ".", "-", ":"];

    for (var k = 0; k < length; k++) {

        stop: for (var i = 0; userString[k] != stringRus[i]; i++) {
            userStringNew[k] = stringLat[i + 1];
            if (i > stringRus.length) {
                alert('Что-то пошло не так! Введите текст на русском языке!');
                userStringNew[k] = '';
                break stop; // Сделаем доп. условие для метки чтобы прервать цикл, и не получить бесконечный цикл в случае, если введены символы которых нет в массиве stringRus.
            }
        }
        if (userString[k] == stringRus[0]) {
            userStringNew[k] = stringLat[0];
        }
    }
    console.log(userStringNew);

    // Либо так (3 варинат) reduce:
    userStringTrans = userStringNew.reduce(function(sum, item) {
        return sum + item;
    }, '');

    // Либо так (2 варинат) forEach:

    // userStringNew.forEach(function(item) {
    //     userStringTrans += item;
    // });

    // Либо так (1 варинат) for:

    // for (var i = 0; i < userStringNew.length; i++) {
    //     userStringTrans += userStringNew[i];
    // }
    console.log(userStringTrans);

// Делаем страницу с итогами

    document.getElementById("result").innerHTML = 'Вы ввели следующий текст:<br><span class="orange">' + userString + '</span>';

    document.getElementById("totals").innerHTML = 'Результат обработки';

    document.getElementById("userNumber").innerHTML = 'Текст после транслитерации:<br><span class="blue">' + userStringTrans + '</span>';


}
