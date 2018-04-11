;

$(function () {

    function findSelector(event) {

        $('*').attr('style', ''); // clear inline style

        var selector = $('input#selector').val();
        console.log('Выбран селектор: ' + selector);

        $(selector).css('color', 'red');

        if (event != true) {
            event.preventDefault();
        }

    }

    function quickSelection(event) {

        var text = event.target.innerHTML;
        text = decodeHtml(text);

        $('input#selector').val(text);

        var flag = true;
        findSelector(flag);

    }

    // Обратная функция HtmlSpecialChars в Javascript, чтобы корректно восприняло строку ".block2 > span"

    function decodeHtml(str)
    {
        var map =
            {
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&quot;': '"',
                '&#039;': "'"
            };
        return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, function(m) {return map[m];});
    }

    $('form').on('submit', findSelector);

    $('.quickSelection strong').on('click', quickSelection);

    // для работы селектора ":target"
    window.location.href = '#id3';

});