import React from "react";
import styled from "styled-components";

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

const Square = ({ id, className, occupied, children, onMouseEnter }) => {
    return (
        <SquareStyled
            id={id}
            onMouseEnter={onMouseEnter}
            className={className}
            style={{ backgroundColor: occupied ? "red" : "#d9762b" }}
        >
            <div className="item-holder">{children}</div>
        </SquareStyled>
    );
};

export default Square;
