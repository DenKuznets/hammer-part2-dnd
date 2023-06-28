import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";
import { ItemTypes } from "../Constants";

const ChairStyled = styled.div`
    /* width: 100px;
    height: 100px; */
    overflow: hidden;
    cursor: move;
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        /* object-fit: contain; */
    }
`;

const Chair = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.CHAIR,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <ChairStyled ref={drag} style={{ opacity: isDragging ? 0.5 : 1}}>
            <img src="/images/chair.png" alt="" />
        </ChairStyled>
    );
};

export default Chair;
