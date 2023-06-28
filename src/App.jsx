import styled from "styled-components";
import Floor from "./components/Floor";
import ItemsPool from "./components/ItemsPool";
import moveItem from "./utils/moveItem";

const Container = styled.div`
    display: flex;
    justify-content: center;
    .items,
    .floor {
        /* flex: 1; */
        flex-basis: 50%;
    }
`;

const App = () => {
    const handleMouseDown = (event) => {
        if (event.target.closest(".item")) {
            console.log("dragging");
            moveItem(event);
        }
    };

    const handleMouseUp = (event) => {
        // console.log(event.target.closest(".dropable"));
    };

    const handleMouseOver = (event) => {
        console.log('mouse over', event.target);
    }

    return (
        <Container
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseUp={(e) => handleMouseUp(e)}
            onMouseOver={(e)=> handleMouseOver(e)}
        >
            <div className="items">
                <ItemsPool />
            </div>
            <div className="floor">
                <Floor />
            </div>
        </Container>
    );
};

export default App;
