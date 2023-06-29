import styled from "styled-components";
import useDragStore from "../store/useDragStore";
import useItemsStateStore from "../store/useItemsStateStore";

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
        // moveItem(event);
    };

    const handleMouseUp = (event) => {
        // console.log(e, e.target);
    };

    const items = useItemsStateStore((state) => state.items)

    const itemsToShow = items.map((item, index) => (
        <Item
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseUp={(e) => handleMouseUp(e)}
            key={index}
            className="item"
            data-type={item.type}
        >
            <img src={`/images/${item.img}`} />
        </Item>
    ));

    return <ItemsPoolStyled>{itemsToShow}</ItemsPoolStyled>;
};

export default ItemsPool;
