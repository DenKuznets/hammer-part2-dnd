import useDragStore from "../store/useDragStore";
import useItemsStateStore from "../store/useItemsStateStore";
import Square from "./Square";
import styled from "styled-components";

const floorRows = 4;
const floorCols = 3;

const FloorStyled = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(${floorCols}, 1fr);
`;

const Floor = () => {
    const isDragging = useDragStore((state) => state.isDragging);
    const addSquare = useItemsStateStore((state) => state.addSquare);
    const squares = useItemsStateStore((state) => state.squares);
    if (squares.length === 0) {
        for (let row = 1; row <= floorRows; row++) {
            for (let col = 1; col <= floorCols; col++) {
                addSquare({
                    id: `${row}${col}`,
                    droppable: true,
                    holdsItem: null,
                });
            }
        }
    }

    console.log(squares);

    const handleMouseEnter = (e) => {
        // console.log(e.target.closest(".droppable"));
    };

    const squaresToShow = squares.map((square, index) => (
        <Square
            id={square.id}
            onMouseEnter={(e) => handleMouseEnter(e)}
            className={square.droppable ? "droppable" : ""}
            occupied={square.occupied}
            key={index}
        />
    ));

    // console.log(squaresToShow);

    return <FloorStyled>{squaresToShow}</FloorStyled>;
};

export default Floor;
