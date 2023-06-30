import styled from "styled-components";
import Floor from "./components/Floor";
import ItemsPool from "./components/ItemsPool";
import moveItem from "./utils/moveItem";
import useItemsStateStore from "./store/useItemsStateStore";
import Item from "./components/Item";
import ReactDOM from "react-dom/client";
import { createPortal } from "react-dom";

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
    const moveItemToSquare = useItemsStateStore(
        (state) => state.moveItemToSquare
    );
    const droppable = useItemsStateStore((state) => state.droppable);
    const setDroppable = useItemsStateStore((state) => state.setDroppable);
    const draggedItemType = useItemsStateStore(
        (state) => state.draggedItemType
    );
    const setDraggedItemType = useItemsStateStore(
        (state) => state.setDraggedItemType
    );
    let draggedItem;

    const handleMouseDown = (event) => {
        event.preventDefault();

        if (event.target.closest(".item")) {
            setDraggedItemType(
                event.target.closest(".item").getAttribute("data-type")
            );
            draggedItem.classList.add("draggedItem");
            draggedItem.style.cssText = `                
                position: fixed;
                left: ${event.clientX - 50}px;
                top: ${event.clientY - 50}px;
                z-index: 1000;
                `;
            document.body.appendChild(draggedItem);
            moveItem(event, setDroppable, draggedItem);
        }
    };

    const handleMouseUp = (event) => {
        console.log(droppable);
        if (droppable) {
            moveItemToSquare(droppable.id, draggedItemType);
            setDroppable(null);
        }
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
