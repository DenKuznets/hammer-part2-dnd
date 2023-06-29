const moveItem = (event, setDroppable, item) => {
    // const item = event.target.closest(".item");
    // потенциальная цель переноса, над которой мы пролетаем прямо сейчас
    let currentDroppable = null;
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

        item.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        // console.log('onmousemove', elemBelow);
        item.hidden = false;

        // событие mousemove может произойти и когда указатель за пределами окна
        // (предмет перетащили за пределы экрана)

        // если clientX/clientY за пределами окна, elementFromPoint вернёт null
        if (!elemBelow) return;

        // потенциальные цели переноса помечены классом droppable (может быть и другая логика)
        let droppableBelow = elemBelow.closest(".droppable");

        if (currentDroppable != droppableBelow) {
            // мы либо залетаем на цель, либо улетаем из неё
            // внимание: оба значения могут быть null
            //   currentDroppable=null,
            //     если мы были не над droppable до этого события (например, над пустым пространством)
            //   droppableBelow=null,
            //     если мы не над droppable именно сейчас, во время этого события

            if (currentDroppable) {
                // логика обработки процесса "вылета" из droppable (удаляем подсветку)
                // leaveDroppable(currentDroppable);
                // console.log("leaving droppable", currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
                // логика обработки процесса, когда мы "влетаем" в элемент droppable
                // enterDroppable(currentDroppable);
                // console.log("over droppable", currentDroppable);
            }
        }
    }

    // передвигаем предмет при событии mousemove
    document.addEventListener("mousemove", onMouseMove);

    // отпустить предмет, удалить ненужные обработчики
    item.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        // console.log("mouse up, current droppable", currentDroppable);
        item.onmouseup = null;
        item.style.position = "static";
        item.style.left = "unset";
        item.style.top = "unset";
        if (currentDroppable !== null) {
            setDroppable(currentDroppable);
        }
    };

    item.ondragstart = function () {
        return false;
    };
};

export default moveItem;
