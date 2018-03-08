// Команды Gulp: https://simplamarket.com/blog/ispolzovanie-gulp-chast-1---ustanovka

var	gulp					= require('gulp'), // Подключаем Gulp
		sass					= require('gulp-sass'), //Подключаем Sass пакет,
		browserSync  = require('browser-sync'), // Подключаем Browser Sync
		concat				= require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
		uglify					= require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
		cssnano				= require('gulp-cssnano'), // Подключаем пакет для минификации CSS
		rename				= require('gulp-rename'), // Подключаем библиотеку для переименования файлов
		del						= require('del'), // Подключаем библиотеку для удаления файлов и папок
		imagemin			= require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
		pngquant			= require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
		cache					= require('gulp-cache'), // Подключаем библиотеку кеширования
		autoprefixer		= require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
		notify					= require( 'gulp-notify' ), // Вывод ошибок и чтобы не завершался gulp в консоли
		sftp						= require('gulp-sftp'); // загрузка на SFTP

gulp.task('sass', function(){ // Создаем таск Sass
	return gulp.src('assets/sass/**/*.scss') // Берем источник
		.pipe(sass() // Преобразуем Sass в CSS посредством gulp-sass
        .on( 'error', notify.onError(
            {
                message: "<%= error.message %>",
                title  : "Sass Error!"
            } ) )
        )
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('assets/css')) // Выгружаем результата в папку assets/css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: 'assets' // Директория для сервера - assets
		},
		notify: false, // Отключаем уведомления
 		tunnel: true,
		tunnel: "klejnov" //Demonstration page: http://klejnov.localtunnel.me
	});
});

gulp.task('scripts', function() {
	return gulp.src([ // Берем все необходимые библиотеки
		'assets/libs/jquery/jquery.min.js', // Берем jQuery
		//'assets/libs/magnific-popup/dist/jquery.magnific-popup.min.js' // Берем Magnific Popup
		])
		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('assets/js')); // Выгружаем в папку assets/js
});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('assets/css/table.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(gulp.dest('assets/css')); // Выгружаем в папку assets/css
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
	gulp.watch('assets/sass/**/*.scss', ['sass']); // Наблюдение за sass файлами в папке sass
	gulp.watch('assets/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('assets/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('clean', function() {
	return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
	return gulp.src('assets/img/**/*') // Берем все изображения из assets
		.pipe(cache(imagemin({ // С кешированием
		// .pipe(imagemin({ // Сжимаем изображения без кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))/**/)
		.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

	var buildCss = gulp.src([ // Переносим библиотеки в продакшен
		'assets/css/style.css',
		'assets/css/table.min.css'
		])
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('assets/fonts/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('assets/js/**/*') // Переносим скрипты в продакшен
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('assets/*.html') // Переносим HTML в продакшен
	.pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
});

gulp.task('deploy', ['build'], function () {
	return gulp.src('dist/**')
		.pipe(sftp({
			host: 'ipdes.by',
			user: 'ipdesby',
			pass: '***',
			port: 52222,
			remotePath: '/home/ipdesby/public_html/test'
		}));
});

gulp.task('default', ['watch']);
