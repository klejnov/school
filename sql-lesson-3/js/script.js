;

var searchQuery = '';

$(function () {

    function albumsGet(searchQuery) {

        $.ajax({
            type: "POST",
            url: "data.php",
            dataType: "json",
            data: {AjaxSearch: searchQuery}
        }).done(function (result) {

            $(".album-wrapper").empty();
            $('#not-found').slideUp(100);
            if ($.isEmptyObject(result)) {
                console.log('Завершаем работу. Пустой объект JSON');
                $('#not-found').slideDown(500);
                return;
            }

            console.log(result);

            $.each(result, function (key, element) {

                $(".album-wrapper").append('<div class="album-content">' +
                    '<div class="album">' +
                    '<div class="album-title">Альбом</div>' +
                    '<h2 class="album-name"><i class="fa fa-headphones" aria-hidden="true"></i>' + element.album_name + '</h2>' +
                    '<div class="player">Исполнитель:</div><div class="singer">' + element.singer_name + '</div>' +
                    '<div class="year">Год выпуска:</div>' +
                    '<div class="year-content">' + element.year + '</div>' +
                    '<div class="genre">Жанр:</div>' +
                    '<div class="genre-content">' + element.albom_genre + '</div>' +
                    '</div>' +
                    '<div class="track zigzag">' +
                    '<div class="track-title">Tреки в альбоме</div>' +
                    '<div class="tracks-wrapper-' + key + '">' +
                    '</div>' +
                    '</div>' +
                    '</div>');

                $.each(element.tracks, function (k, track) {

                    $('.tracks-wrapper-' + key + '').append('<div class="track-content">' +
                        '<div class="track-ico"><i class="fa fa-music" aria-hidden="true"></i></div>' +
                        '<div class="track-content-name">' +
                        '<div class="track-name">' + track.track_name + '</div>' +
                        '<div class="track-year">' + track.year + '</div>' +
                        '<div class="track-genre">' + track.genre_track + '</div>' +
                        '</div>' +
                        '<div class="track-duration">' + timeFormat(track.duration * 1000) + '</div>' +
                        '</div>');
                });

            });


        }).fail(function () {
            alert('Что-то пошло не так. Повторите позже.');
        });
    }

    var timeFormat = (function () {
        function num(val) {
            val = Math.floor(val);
            return val < 10 ? '0' + val : val;
        }

        return function (ms/**number*/) {
            var sec = ms / 1000
                , hours = sec / 3600 % 24
                , minutes = sec / 60 % 60
                , seconds = sec % 60
            ;

            // return num(hours) + ":" + num(minutes) + ":" + num(seconds);
            return num(minutes) + ":" + num(seconds);
        };
    })();

    albumsGet(searchQuery);

    $('input').keyup(function () {

        var searchQuery = $('input[name="search"]').val().toUpperCase();

        if (searchQuery.length < 3 && searchQuery.length > 0) {
            $('.min').slideDown(500);
        }
        if (searchQuery.length >= 3) {
            albumsGet(searchQuery);
            $('.min').slideUp(500);
        }
        if (searchQuery.length == 0) {
            albumsGet('');
            $('.min').slideUp(500);
        }

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
