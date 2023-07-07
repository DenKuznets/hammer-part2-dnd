import styled from "styled-components";
import { moveItem, removeItem, setDraggedItem } from "../features/appSlice";
import { useDispatch, useSelector } from "react-redux";

const SquareStyled = styled.div`
    outline: 1px solid green;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media only screen and (max-width: 460px) {
        height: 120px;
    }
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
    const dispatch = useDispatch();
    const draggedItem = useSelector((state) => state.app.draggedItem);
    const dragEnterOrOver = (e) => {
        if (className !== "droppable") return;
        e.preventDefault();
    };

    const handleDrop = (e) => {
        dispatch(
            moveItem({
                toSquareId: e.target.closest(".droppable").id,
                draggedItem: draggedItem,
            })
        );
        dispatch(setDraggedItem(null));
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
                        dispatch(removeItem(e.target.closest(".droppable").id));
                    }}
                >
                    X
                </button>
            )}
        </SquareStyled>
    );
};

export default Square;
