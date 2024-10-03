//Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт плагинов
import { plugins } from "./gulp/config/plugins.js"; 

// Передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),
    path: path,
    gulp: gulp,
    plugins: plugins,
};

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset,resetImgBuild } from "./gulp/tasks/rest.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js, libsJs, jsFile } from "./gulp/tasks/js.js";
import { img, imgBuild } from "./gulp/tasks/images.js";
import { fontsStyle } from "./gulp/tasks/fonts.js";



// Наблюдение за изменениями в файлах
function watcherDev() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html); // gulp.watch(path.watch.html, gulp.series(html, ftp))
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.img, img);

}
 

function watcherDevLite() {
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.html, { delay: 10 }, html);
    gulp.watch(path.watch.scss, scss);
}

// Последовательная обработака шрифтов
const fonts = gulp.series(fontsStyle);

// // Построение параллельных сценариев выполнения задач
// const mainTasks = gulp.parallel(fileJs, copy, libsJs, html, scss, js, img, fonts);

// // Построение следовательных сценариев выполнения задач
// const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
// const build = gulp.series(reset, mainTasks); 


// Основные задачи
const mainTasksDev = gulp.series(fonts, gulp.parallel(js, libsJs, jsFile, copy, html, scss, img));
const mainTasksBuild = gulp.series(fonts, js, libsJs, jsFile, copy, html, scss, imgBuild );
const mainTasksDevLite = gulp.series(gulp.parallel(js, libsJs, jsFile, html, scss));


// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasksDev, gulp.parallel(watcherDev, server));
const build = gulp.series(reset, mainTasksBuild);
const buildAssets = gulp.series(resetImgBuild, gulp.series(imgBuild));


//Быстрая сборка {запуск gulp devLite, gulp devAssets }
const devLite = gulp.series(reset, mainTasksDevLite, gulp.parallel(watcherDevLite, server));
const devAssets = gulp.series(fonts, gulp.parallel(img, copy));



// Экспорт сценариев 
export { dev }
export { devLite }
export { devAssets }
export { build }
export { buildAssets }


// Выполнение сценария по умолчанию
gulp.task("default", dev);
