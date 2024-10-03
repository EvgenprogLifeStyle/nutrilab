import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import browsersync from "browser-sync"; // Локальеый сервер
import newer from "gulp-newer"; // Проверка обновлений
import ifPlugin from "gulp-if"; // Условное ветвление

// Экспортируем объект
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    newer: newer,
    browsersync: browsersync,
    if: ifPlugin,
};
