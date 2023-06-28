import styled from "styled-components";
import useDragStore from "../store/useDragStore";
import moveItem from "../utils/moveItem";

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
