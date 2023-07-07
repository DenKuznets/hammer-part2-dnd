import { useSelector } from "react-redux";
import Item from "./Item";
import Square from "./Square";
import styled from "styled-components";

const FloorStyled = styled.div`
    height: 90vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media only screen and (max-width: 775px) {
        grid-template-columns: repeat(2, 1fr);
        
    }
    @media only screen and (max-width: 460px) {
        grid-template-columns: repeat(1, 1fr);
        height: auto;
    }
`;

const Floor = () => {
    const squares = useSelector((store) => store.app.squares);

    const squaresToShow = squares.map((square, index) => {
        return (
            <Square
                id={square.id}
                className={square.droppable ? "droppable" : ""}
                key={index}
            >
                {square.holdsItem && <Item itemType={square.holdsItem} />}
            </Square>
        );
    });

    return <FloorStyled>{squaresToShow}</FloorStyled>;
};

export default Floor;
