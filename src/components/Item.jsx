import styled from "styled-components";

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
    return (
        <ItemStyled className="item" data-type={itemType}>
            <img src={`/images/${itemType}.png`} />
        </ItemStyled>
    );
};

export default Item;
