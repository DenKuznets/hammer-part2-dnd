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
`;

const Square = ({ id, className, occupied, children, onMouseEnter }) => {
    return (
        <SquareStyled
            id={id}
            onMouseEnter={onMouseEnter}
            className={className}
            style={{ backgroundColor: occupied ? "red" : "#d9762b" }}
        >
            {children}
        </SquareStyled>
    );
};

export default Square;
