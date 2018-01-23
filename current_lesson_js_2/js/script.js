var msg = "Тест на любителя пива!";
alert(msg);

var beer = confirm("Пива?");

if (beer == true) {
    var div = document.createElement('div');
    div.className = "image";
    div.innerHTML = "<img class='img-responsive' src='img/1.gif' alt='Пиво'>";
    document.body.appendChild(div);
} else {
    var div = document.createElement('div');
    div.className = "image";
    div.innerHTML = "<img class='img-responsive' src='img/2.gif' alt='Молоко'>";
    document.body.appendChild(div);
}

console.log("Внимание! Употребление пива вредит вашему здоровью!");