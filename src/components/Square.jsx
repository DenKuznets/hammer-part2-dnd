import React from "react";
import styled from "styled-components";
import useItemsStateStore from "../store/useItemsStateStore";

const SquareStyled = styled.div`
    /* border: 1px solid green; */
    outline: 1px solid green;
    width: 100%;
    height: 100%;
    /* width: 100px;
    height: 100px; */
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: relative; */
    .item-holder {
        /* position: absolute; */
    }
`;

const Square = ({ id, className, children, holdsItem }) => {
    const moveItemToSquare = useItemsStateStore(
        (state) => state.moveItemToSquare
    );
    const draggedItemType = useItemsStateStore(
        (state) => state.draggedItemType
    );
    const dragEnterOrOver = (e) => {
        if (holdsItem) return;
        e.preventDefault();
    };

    const handleDrop = (e) => {
        console.log(e);
        moveItemToSquare(e.target.id, draggedItemType);
    };
    return (
        <SquareStyled
            id={id}
            onDragEnter={dragEnterOrOver}
            onDragOver={dragEnterOrOver}
            onDrop={(e) => handleDrop(e)}
            className={className}
            style={{ backgroundColor: "#d9762b" }}
        >
            <div className="item-holder">{children}</div>
        </SquareStyled>
    );
};

export default Square;
