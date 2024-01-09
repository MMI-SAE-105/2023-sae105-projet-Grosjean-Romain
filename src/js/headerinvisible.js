document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var footerPosition = footer.offsetTop;

        var distanceToFooter = footerPosition - scrollPosition;
        var triggerDistance = 300;
        var fadeOutDistance = 100;

        if (distanceToFooter < triggerDistance) {
            var opacity = 1 - (triggerDistance - distanceToFooter) / triggerDistance;

            if (distanceToFooter < fadeOutDistance) {
                opacity = 0;
            }

            header.style.opacity = opacity;
        } else {
            header.style.opacity = 1;
        }
    });
});