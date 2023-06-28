const moveItem = (event) => {
    const item = event.target.closest(".item");
    // console.log(item.getBoundingClientRect());
    const itemStartingPosLeft = item.getBoundingClientRect().left;
    const itemStartingPosTop = item.getBoundingClientRect().top;

    let shiftX = event.clientX - itemStartingPosLeft;
    let shiftY = event.clientY - itemStartingPosTop;

    item.style.position = "absolute";
    item.style.zIndex = 1000;
    // document.body.append(item);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        item.style.left = pageX - shiftX + "px";
        item.style.top = pageY - shiftY + "px";
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // передвигаем мяч при событии mousemove
    document.addEventListener("mousemove", onMouseMove);

    // отпустить мяч, удалить ненужные обработчики
    item.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        item.onmouseup = null;
    };

    item.ondragstart = function () {
        return false;
    };
};

export default moveItem;