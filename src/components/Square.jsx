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
    position: relative;
    .item-holder {
        position: absolute;
    }
`;

const Square = ({ id, className, children }) => {
    const moveItem = useItemsStateStore((state) => state.moveItem);
    const draggedItem = useItemsStateStore((state) => state.draggedItem);
    const dragEnterOrOver = (e) => {
        if (className !== "droppable") return;
        e.preventDefault();
    };

    const handleDrop = (e) => {
        moveItem(e.target.closest(".droppable"), draggedItem);
    };
    return (
        <SquareStyled
            id={id}
            onDragEnter={dragEnterOrOver}
            onDragOver={dragEnterOrOver}
            onDrop={(e) => handleDrop(e)}
            className={className}
            style={{
                backgroundColor: className === "droppable" ? "#d9762b" : "red",
            }}
        >
            <div className="item-holder">{children}</div>
        </SquareStyled>
    );
};

export default Square;
