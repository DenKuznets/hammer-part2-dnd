import { create } from "zustand";

const useItemsStateStore = create((set) => ({
    squares: [],
    addSquare: (square) =>
        set((state) => ({ squares: [...state.squares, square] })),
    moveItem: (to, item) =>
        set((state) => {
            let newState = state;
            console.log(to);
            newState = {
                squares: newState.squares.map((square) => {
                    let newSquare = square;
                    if (item.from && item.from.id === square.id) {
                        newSquare = { ...square, holdsItem: null };
                    }
                    if (square.id === to.id) {
                        console.log('adding item');
                        newSquare = { ...square, holdsItem: item.type };
                    }
                    console.log("newSquare", newSquare);
                    return newSquare;
                }),
            };

            return newState;
        }),
    // removeItemFromSquare:
    draggedItem: { from: null, type: null },
    setDraggedItem: (from, type) =>
        set({ draggedItem: { from: from, type: type } }),
}));

export default useItemsStateStore;
