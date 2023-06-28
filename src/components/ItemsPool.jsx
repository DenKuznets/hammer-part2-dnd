import styled from "styled-components";

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
    const items = [
        {
            type: "chair",
            img: "chair.png",
            sizeX: 1,
            sizeY: 1,
        },
    ];

    const itemsToShow = items.map((item, index) => (
        <Item key={index}>
            <img src={`/images/${item.img}`} />
        </Item>
    ));

    return <ItemsPoolStyled>{itemsToShow}</ItemsPoolStyled>;
};

export default ItemsPool;
