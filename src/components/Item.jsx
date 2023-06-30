import styled from "styled-components";
import useItemsStateStore from "../store/useItemsStateStore";

const ItemStyled = styled.div`
    width: 100px;
    height: 100px;
    cursor: move;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Item = ({ itemType }) => {
    const setDraggedItem = useItemsStateStore((state) => state.setDraggedItem);

    const handleDragStart = (e) => {
        const item = e.target.closest(".item");
        // метод setDragImage устанавливает изображение, показываемое при перетаскивании. Можно выбрать существующий элемент (иначе будет создана автоматическая версия которая может не соответстовать изначальному предмету на странице)
        e.dataTransfer.setDragImage(item, 50, 50);
        const square = item.closest(".droppable");
        setDraggedItem(square, item.getAttribute("data-type"));
    };

    return (
        <ItemStyled
            onDragStart={(e) => handleDragStart(e)}
            draggable
            className="item"
            data-type={itemType}
        >
            <img src={`/images/${itemType}.png`} />
        </ItemStyled>
    );
};

export default Item;
