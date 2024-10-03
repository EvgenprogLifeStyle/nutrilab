/** Обработка формы */
/*if ($(".modal")) {


    function formSubmit(form, textThanks) {
        $(form).on("submit", function (e) {
            e.preventDefault();
            $(form)
                .parsley()
                .on("form:submit", function () {

                    $('.modal-success__text').html(textThanks)
                    $('.modal').each(function () { $(this).removeClass('active') })
                    // if ($('.js-overlay-modal.active')) console.log(1);
                    if ($('.js-overlay-modal.active')) $('.js-overlay-modal').addClass('active')
                    $('.modal-success').addClass('active')
                    $('.footer__input').val('')
                    if ($('.form-text')) $('.form-text').val('')
                    $('.normal-input').each(function () { $(this).val('') })
                    return false;
                });
        });
    }
    formSubmit("#review-form", 'Ваш отзыв отправлен.')
    formSubmit("#cheaper-form", 'Ваш запрос отправлен, мы скоро <br/> свяжемся с вами.')
    formSubmit("#order-modal", 'Ваша заявка отправлена, мы скоро <br/>свяжемся с вами.')
    formSubmit("#feedback-modal", 'Ваша заявка отправлена, мы скоро <br/>свяжемся с вами.')
    formSubmit("#form-mailing", 'Вы подписаны.')
    formSubmit("#form-faq", 'Вопрос отправлен')*/

//<Валидация форм авторизации и регистрации>
/*if ($('#auth-modal'))
    $('#auth-modal').on("submit", function (e) {
        e.preventDefault();
        $('#auth-modal')
            .parsley()
            .on("form:submit", function () {
                return false;
            });
    });
*/


