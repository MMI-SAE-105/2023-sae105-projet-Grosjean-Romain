window.scrollLeft = (element, delta) => {
    element.scrollLeft += delta * element.clientWidth;
};

window.startDrag = (event, data) => {
    data.startX = event.clientX;
    data.isDragging = true;
};

window.endDrag = (data) => {
    data.isDragging = false;
};

window.drag = (event, data) => {
    if (data.isDragging) {
        const deltaX = data.startX - event.clientX;
        window.scrollLeft(data.$refs.parent, deltaX / data.$refs.parent.clientWidth);
        data.startX = event.clientX;
    }
};