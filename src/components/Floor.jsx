import useItemsStateStore from "../store/useItemsStateStore";
import Item from "./Item";
import Square from "./Square";
import styled from "styled-components";

const FloorStyled = styled.div`
    height: 90vh;
    display: grid;
`;

const Floor = () => {
    const floorRows = 4;
    const floorCols = 3;
    const squares = useItemsStateStore((state) => state.squares);
    const addSquare = useItemsStateStore((state) => state.addSquare);
    if (squares.length === 0) {
        for (let row = 1; row <= floorRows; row++) {
            for (let col = 1; col <= floorCols; col++) {
                addSquare({
                    id: `${row}${col}`,
                    droppable: !(row === 4),
                    holdsItem: null,
                });
            }
        }
    }

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

    return (
        <FloorStyled
            style={{ gridTemplateColumns: `repeat(${floorCols}, 1fr)` }}
        >
            {squaresToShow}
        </FloorStyled>
    );
};

export default Floor;
