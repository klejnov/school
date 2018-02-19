;

var students = [];
students[0] = ["Иванов", "Иван", 22, 10];
students[1] = ["Петров", "Петр", 21, 11];
students[2] = ["Сидоров", "Василий", 21, 8];
students[3] = ["Лосев", "Павел", 23, 11.8];
students[4] = ["Павлов", "Игорь", 20, 11.5];

var students2 = [
    ["Косяков", "Женя", 31, 10.2],
    ["Неверовский", "Стас", 30, 12],
    ["Жевнеров", "Олег", 33, 11],
    ["Тосик", "Антон", 23, 11.8],
    ["Зуй", "Женя", 21, 8.5],
    ["Соколова", "Оксана", 29, 7.5],
    ["Голубь", "Дмитрий", 29, 12],
    ["Тосик", "Стас", 49, 8.5]
];

console.log('Начальный массив:');
console.log(students);

// Первый вызов для отображения таблицы.
getSort(0, false);

function createTable(students_arr) {
    // Вывод в таблицу
    document.getElementById("tr").innerHTML = '';
    // students.forEach(function(item, i, students) - item – очередной элемент массива. i – его номер.  students – массив, который перебирается.
    students_arr.forEach(function (item) {
        document.getElementById("tr").innerHTML += '<tr><td>' + item[0] + '</td>' + '<td>' + item[1] + '</td>' + '<td>' + item[2] + '</td>' + '<td>' + item[3] + '</td><tr>';
    });
};

function getSort(sort_id, reverse) {
    var i = sort_id;
    students.sort(CompareForSort);
    if (reverse == true) {
        students.reverse()
    }

    function CompareForSort(first, second) {
        if (first[i] == second[i])
            return 0;
        if (first[i] < second[i])
            return -1;
        else
            return 1;
    }

    createTable(students);

    console.log('массив после сортировки, реверс - ' + reverse + ':');
    console.log(students);
}


function addStudents() {
    var students_new = students2.concat(students);
    // Вывод в таблицу
    createTable(students_new);
}

function toFind() {
    addStudents();

    var search;
    var students_new = students2.concat(students);

    var search_id = prompt('Введите: \n 1 - для поиска по фамилии \n 2 - для поиска по имени \n 3 - для поиска по возрасту \n 4 - для поиска по среднему баллу', '1');
    switch (search_id) {
        case '1':
            search = prompt('Введите фамилию, например:', 'Тосик');
            break;
        case '2':
            search = prompt('Введите имя, например:', 'Павел');
            break;
        case '3':
            search = prompt('Введите возраст, например:', '21');
            break;
        case '4':
            search = prompt('Введите средний балл, например:', '11.8');
            break;
        default:
            alert('Что-то пошло не так!')
    }

    var students_new = students_new.filter(function (item) {
        return item[search_id - 1] == search;
    });

    if (students_new.length == 0) {
        // Вывод в таблицу
        document.getElementById("tr").innerHTML = '';
        document.getElementById("tr").innerHTML += '<tr><td colspan="4" style="text-align: center;">Ничего не найдено</td></tr>';
    } else {
        // Вывод в таблицу
        createTable(students_new);
    }

    console.log('массив после поиска:');
    console.log(students_new);
}

//вывод кода в textarea (подключен ajax)
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
