import React from "react";
import Square from "./Square";
import FloorSquare from "./FloorSquare";
import Chair from "./Chair";
import styled from "styled-components";
import { moveChair } from "./Planner";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ItemTypes } from "../Constants";

const FloorStyled = styled.div`
    width: 100%;
    height: 100vh;
    /* display: flex;
    flex-wrap: wrap; */
    background: #d9762b;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
`;

function renderSquare(i, chairPosition) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
        <div
            key={i}
            style={{
                // width: "12.5vw",
                height: "12.5vh",
            }}            
        >
            <FloorSquare x={x} y={y}> {renderFurniture(x, y, chairPosition)} </FloorSquare>
        </div>
    );
}

function renderFurniture(x, y, [chairX, chairY]) {
    if (x === chairX && y === chairY) {
        return <Chair />;
    }
}

const Floor = ({ chairPosition }) => {
    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, chairPosition));
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <FloorStyled>{squares}</FloorStyled>;
        </DndProvider>
    );
};

export default Floor;
