import Square from "./Square";
import styled from "styled-components";

const floorSizeX = 3;
const floorSizeY = 4;

const FloorStyled = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(${floorSizeX}, 1fr);
`;

const Floor = () => {
    const squares = [];
    for (let x = 1; x <= floorSizeX; x++) {
        for (let y = 1; y <= floorSizeY; y++) {
            squares.push({
                x: x,
                y: y,
                dropable: true,
                occupied: false,
            });
        }
    }

    const squaresToShow = squares.map((square, index) => (
        <Square
            className={square.dropable ? "dropable" : ""}
            occupied={square.occupied}
            key={index}
        />
    ));

    // console.log(squaresToShow);

    return <FloorStyled>{squaresToShow}</FloorStyled>;
};

export default Floor;
