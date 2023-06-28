import React from "react";
import Square from "./Square";
import { canMoveChair, moveChair } from "./Planner";
import { ItemTypes } from "../Constants";
import { useDrop } from "react-dnd";

const Overlay = ({ color }) => (
    <div
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: color,
        }}
    ></div>
);

const FloorSquare = ({ x, y, children }) => {
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: ItemTypes.CHAIR,
            drop: () => moveChair(x, y),
            canDrop: () => canMoveChair(x, y),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop(),
            }),
        }),
        [x, y]
    );
    return (
        <div
            ref={drop}
            style={{ position: "relative", width: "100%", height: "100%" }}
        >
            <Square> {children}</Square>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>
    );
};

export default FloorSquare;
