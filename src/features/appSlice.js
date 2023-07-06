import { createSlice } from "@reduxjs/toolkit";

const squares = [];
for (let row = 1; row <= 4; row++) {
    for (let col = 1; col <= 3; col++) {
        squares.push({
            id: `${row}${col}`,
            droppable: !(row === 4),
            holdsItem: null,
        });
    }
}

const initialState = {
    squares: squares,
    draggedItem: { from: null, type: null },
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        moveItem: (state, { payload: { toSquareId, draggedItem } }) => {
            const toSquare = state.squares.find(
                (square) => square.id === toSquareId
            );
            toSquare.holdsItem = draggedItem.type;

            if (draggedItem.fromSquareId) {
                const fromSquare = state.squares.find(
                    (square) => square.id === draggedItem.fromSquareId
                );
                fromSquare.holdsItem = null;
            }
        },
        removeItem: (state, { payload }) => {
            const square = state.squares.find(
                (square) => square.id === payload
            );
            square.holdsItem = null;
        },
        setDraggedItem: (state, { payload: { squareId, itemType } }) => {
            state.draggedItem = {
                from: squareId,
                type: itemType,
            };
        },
    },
});

export const { moveItem, removeItem, setDraggedItem } = appSlice.actions;

export default appSlice.reducer;