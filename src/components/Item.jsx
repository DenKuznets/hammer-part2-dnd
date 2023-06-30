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
    const setDraggedItemType = useItemsStateStore(
        (state) => state.setDraggedItemType
    );
    const handleDragStart = (e) => {
        // console.log(e.target.closest(".item"));
        setDraggedItemType(e.target.closest(".item").getAttribute("data-type"));
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
