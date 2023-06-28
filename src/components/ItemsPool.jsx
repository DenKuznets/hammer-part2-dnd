import styled from "styled-components";
import useDragStore from "../store/useDragStore";

const ItemsPoolStyled = styled.div``;

const Item = styled.div`
    width: 100px;
    height: 100px;
    cursor: move;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const ItemsPool = () => {
    const startDragging = useDragStore((state) => state.startDragging);
    const stopDragging = useDragStore((state) => state.stopDragging);
    const handleMouseDown = (event) => {
        const item = event.target.closest(".item");
        console.log(item.getBoundingClientRect());
        let shiftX = event.clientX - item.getBoundingClientRect().left;
        let shiftY = event.clientY - item.getBoundingClientRect().top;

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
    const handleMouseUp = (e) => {
        // console.log(e, e.target);
    };
    const items = [
        {
            type: "chair",
            img: "chair.png",
            sizeX: 1,
            sizeY: 1,
        },
    ];

    const itemsToShow = items.map((item, index) => (
        <Item
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseUp={(e) => handleMouseUp(e)}
            key={index}
            className="item"
        >
            <img src={`/images/${item.img}`} />
        </Item>
    ));

    return <ItemsPoolStyled>{itemsToShow}</ItemsPoolStyled>;
};

export default ItemsPool;
