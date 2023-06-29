import { create } from "zustand";
import { ItemTypes } from "../utils/Constants";

const useItemsStateStore = create((set) => ({
    squares: [],
    addSquare: (square) =>
        set((state) => ({ squares: [...state.squares, square] })),
    moveItemToSquare: (currentSquareId, itemType) =>
        set((state) => {
            let newState = state;
            newState = {
                squares: newState.squares.map((square) => {
                    let newSquare = square;
                    if (square.id === currentSquareId) {
                        newSquare = { ...square, holdsItem: itemType };
                    }
                    console.log("newSquare", newSquare);
                    return newSquare;
                }),
            };

            return newState;
        }),
    droppable: null,
    setDroppable: (square) => set({ droppable: square }),
    draggedItemType: null,
    setDraggedItemType: (itemType) => set({ draggedItemType: itemType }),
}));

export default useItemsStateStore;
