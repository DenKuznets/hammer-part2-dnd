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

    const handleMouseDown = (event) => {
        event.preventDefault();
        // console.log(event.target.closest(".item"));
        if (event.target.closest(".item")) {
            // создать новый элемент с позицией абсолют
            const div = document.createElement("div");
            div.classList.add("draggedItem");
            div.style.cssText = `
                height: 100px;
                width: 100px;
                background-colod: red;
            `;
            document.body.appendChild(div);
            // координаты центра элмента должны быть равны координатам курсора
            setDraggedItemType(
                event.target.closest(".item").getAttribute("data-type")
            );
            moveItem(event, setDroppable, div);
        }
    };

    const handleMouseUp = (event) => {
        // удалить созданный предмет из документа

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
