import styled from "styled-components";
import Floor from "./components/Floor";
import ItemsPool from "./components/ItemsPool";
import moveItem from "./utils/moveItem";
import useItemsStateStore from "./store/useItemsStateStore";

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
    const squares = useItemsStateStore((state) => state.squares);
    const moveItemToSquare = useItemsStateStore(
        (state) => state.moveItemToSquare
    );
    const setDroppable = useItemsStateStore((state) => state.setDroppable);
    const droppable = useItemsStateStore((state) => state.droppable);
    let draggedItemType = null;

    const handleMouseDown = (event) => {
        if (event.target.closest(".item")) {
            draggedItemType = event.target
                .closest(".item")
                .getAttribute("data-type");
            console.log('dragged item:',draggedItemType);
            moveItem(event, setDroppable);
        }
    };

    const handleMouseUp = (event) => {
        console.log("droppable", droppable.id);
        
    };

    return (
        <Container
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseUp={(e) => handleMouseUp(e)}
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
