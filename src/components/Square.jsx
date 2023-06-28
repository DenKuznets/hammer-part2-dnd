import React from "react";
import styled from "styled-components";

const SquareStyled = styled.div`
    /* border: 1px solid green; */
    outline: 1px solid green;
    width: 100%;
    height: 100%;
    padding: 10px;
`;

const Square = ({ children }) => {
    return <SquareStyled>{children}</SquareStyled>;
};

export default Square;
