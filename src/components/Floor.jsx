import { useSelector } from "react-redux";
import useItemsStateStore from "../store/useItemsStateStore";
import Item from "./Item";
import Square from "./Square";
import styled from "styled-components";

const FloorStyled = styled.div`
    height: 90vh;
    display: grid;
`;

const Floor = () => {
    const squaresRedux = useSelector((store) => store.app.squares);
    // console.log(squaresRedux);
    

    const squaresToShow = squaresRedux.map((square, index) => {
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

    return (
        <FloorStyled style={{ gridTemplateColumns: `repeat(3, 1fr)` }}>
            {squaresToShow}
        </FloorStyled>
    );
};

export default Floor;
