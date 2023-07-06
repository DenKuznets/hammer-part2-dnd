import styled from "styled-components";
import useItemsStateStore from "../store/useItemsStateStore";
import {
    moveItem as moveItemRedux,
    removeItem as removeItemRedux,
} from "../features/appSlice";
import { useDispatch } from "react-redux";

const SquareStyled = styled.div`
    outline: 1px solid green;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .item-holder {
        position: absolute;
    }
    button {
        position: absolute;
        right: 0;
        top: 0;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.3s ease;
        opacity: 0.5;
        &:hover {
            opacity: 1;
        }
    }
`;

const Square = ({ id, className, children }) => {
    const moveItem = useItemsStateStore((state) => state.moveItem);
    const dispatch = useDispatch();
    const removeItem = useItemsStateStore((state) => state.removeItem);
    const draggedItem = useItemsStateStore((state) => state.draggedItem);
    const dragEnterOrOver = (e) => {
        if (className !== "droppable") return;
        e.preventDefault();
    };

    const handleDrop = (e) => {
        moveItem(e.target.closest(".droppable"), draggedItem);
        dispatch(
            moveItemRedux({
                toSquareId: e.target.closest(".droppable").id,
                draggedItem: draggedItem,
            })
        );
    };
    return (
        <SquareStyled
            id={id}
            onDragEnter={dragEnterOrOver}
            onDragOver={dragEnterOrOver}
            onDrop={(e) => handleDrop(e)}
            className={className}
            style={{
                backgroundColor: className === "droppable" ? "#d9762b" : "red",
            }}
        >
            <div className="item-holder">{children}</div>
            {children && (
                <button
                    onClick={(e) => {
                        removeItem(e.target.closest(".droppable").id);
                        dispatch(
                            removeItemRedux(e.target.closest(".droppable").id)
                        );
                    }}
                >
                    X
                </button>
            )}
        </SquareStyled>
    );
};

export default Square;
