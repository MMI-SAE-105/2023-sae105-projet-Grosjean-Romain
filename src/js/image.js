function openImage(id) {
    const container = document.getElementById("card__fixed");
    container.style.display = "flex";
    const image = document.getElementById("card__image-fixed");
    image.src = `../../public/img/0-home/card_${id}_large.jpg`;
}

function closeImage() {
    const container = document.getElementById("card__fixed");
    container.style.display = "none"
}