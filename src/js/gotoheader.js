document.addEventListener('DOMContentLoaded', function () {
    var arrowElement = document.querySelector('.footer__middle__arrow');

    if (arrowElement) {
        arrowElement.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});