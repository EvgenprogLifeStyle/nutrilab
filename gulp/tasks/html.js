import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";


export const html = () =>
    app.gulp
        .src(app.path.src.html)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "HTML",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(fileinclude()) //При использовании pug нужно закоментить
        // .pipe(pug({
        //    // Сжатие HTML файла
        //    pretty: true,
        //    // Показывать в терминале какой файл обработан
        //    verbose: true
        // }))
        .pipe(app.plugins.replace(/@img\//g, "img/"))
        .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    value: "%DT%",
                    append: {
                        key: "_v2",
                        cover: 4,
                        to: ["css", "js"],
                    },
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
