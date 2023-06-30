import styled from "styled-components";
import Item from "./Item";
import { ItemsList } from "../utils/Constants";

const ItemsPoolStyled = styled.div``;

const ItemsPool = () => {
    const itemsToShow = ItemsList.map((itemType, index) => (
        <Item key={index} itemType={itemType} />
    ));

    return <ItemsPoolStyled>{itemsToShow}</ItemsPoolStyled>;
};

export default ItemsPool;
