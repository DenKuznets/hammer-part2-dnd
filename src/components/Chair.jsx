import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import styled from "styled-components";
import { ItemTypes } from "../Constants";
import dragPreview from "/images/chair3d.jpg";

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
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: ItemTypes.CHAIR,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    // console.log(preview);
    return (
        <>
            <DragPreviewImage
                style={{
                    width: "100px !important",
                    height: "100px !important",
                }}
                connect={preview}
                src={dragPreview}
            />
            <ChairStyled ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
                <img src="/images/chair.png" alt="" />
            </ChairStyled>
        </>
    );
};

export default Chair;
