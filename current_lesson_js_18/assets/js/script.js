;


$(function () {

    $('.tbl-header th').on('click', '.fa-filter', function () {

        $(event.target).parent().find('input').slideToggle(500);
        console.log($(event.target).parent());
    });

    $('.tbl-header th').on('click', 'span, [class^="fa fa-sort"]', function () {

        // Показ/скрытие иконки сортировки. part 1
        $(event.target).parent().find('[class^="fa fa-sort"]').attr("data-show", "active");
        $(event.target).closest('tr').find('[class^="fa fa-sort"]:not([data-show="active"])').hide();

        // определим позицию input
        var position = $(event.target).parent().index() + 1;
        console.log(position);

        var flag = $(event.target).parent().find('.fa').first().is(':visible');

        console.log(flag);
        if (flag) {
            $(event.target).parent().find('.fa-sort-alpha-desc').show();
            $(event.target).parent().find('.fa-sort-alpha-asc').hide();

            $('.tbl-content tr').sort(function (a, b) { // сортируем
                if (position == 1) {
                    return $(b).find("td:nth-child(" + position + ")").text().localeCompare($(a).find("td:nth-child(" + position + ")").text());
                } else {
                    return $(b).find("td:nth-child(" + position + ")").text() - $(a).find("td:nth-child(" + position + ")").text();
                }
            }).appendTo('.tbl-content table tbody'); // возвращаем в контейнер


            $(event.target).parent().find('.fa-sort-numeric-desc').show();
            $(event.target).parent().find('.fa-sort-numeric-asc').hide();
        } else {
            $(event.target).parent().find('.fa-sort-alpha-asc').show();
            $(event.target).parent().find('.fa-sort-alpha-desc').hide();

            $('.tbl-content tr').sort(function (a, b) { // сортируем
                if (position == 1) {
                    return $(a).find("td:nth-child(" + position + ")").text().localeCompare($(b).find("td:nth-child(" + position + ")").text());
                } else {
                    return $(a).find("td:nth-child(" + position + ")").text() - $(b).find("td:nth-child(" + position + ")").text();
                }
            }).appendTo('.tbl-content table tbody'); // возвращаем в контейнер

            $(event.target).parent().find('.fa-sort-numeric-asc').show();
            $(event.target).parent().find('.fa-sort-numeric-desc').hide();
        }

        // Показ/скрытие иконки сортировки. part 2
        $(event.target).parent().find('[class^="fa fa-sort"]').attr("data-show", "");

    });


    $('input').keyup(function () {

        var country = $('input[name="country"]').val().toUpperCase();
        var consumption = $('input[name="consumption"]').val().toUpperCase();
        var beer = $('input[name="beer"]').val().toUpperCase();
        var wine = $('input[name="wine"]').val().toUpperCase();
        var forecast = $('input[name="forecast"]').val().toUpperCase();

        // подсветим иконку фильтра, если поле не пусто
        if ($(event.target).val()) {
            $(event.target).parent().find('.fa-filter').addClass('active');
        } else {
            $(event.target).parent().find('.active').removeClass('active');
        }

        $(".tbl-content tr").show(1000);

        $(".tbl-content tr").each(function (indx, element) {

            var countryTd = $(element).find('td:nth-child(1)').text().toUpperCase();
            var consumptionTd = $(element).find('td:nth-child(2)').text().toUpperCase();
            var beerTd = $(element).find('td:nth-child(3)').text().toUpperCase();
            var wineTd = $(element).find('td:nth-child(4)').text().toUpperCase();
            var forecastTd = $(element).find('td:nth-child(5)').text().toUpperCase();

            //console.log(countryTd);
            //console.log(!(countryTd.indexOf(country) + 1));

            if (!(countryTd.indexOf(country) + 1) ||
                !(consumptionTd.indexOf(consumption) + 1) ||
                !(beerTd.indexOf(beer) + 1) ||
                !(wineTd.indexOf(wine) + 1) ||
                !(forecastTd.indexOf(forecast) + 1)) {
                $(".tbl-content tr").eq(indx).hide();
                //console.log(indx);
            }
        });

    });


});


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
