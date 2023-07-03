import { create } from "zustand";

const useItemsStateStore = create((set) => ({
    squares: [],
    loadSquares: (newSquares) => set(() => ({ squares: newSquares })),
    addSquare: (square) =>
        set((state) => ({ squares: [...state.squares, square] })),
    moveItem: (to, item) =>
        set((state) => {
            let newState = state;
            newState = {
                squares: newState.squares.map((square) => {
                    let newSquare = square;
                    if (item.from && item.from.id === square.id) {
                        newSquare = { ...square, holdsItem: null };
                    }
                    if (to && square.id === to.id) {
                        newSquare = { ...square, holdsItem: item.type };
                    }
                    return newSquare;
                }),
            };

            return newState;
        }),
    removeItem: (from) =>
        set((state) => ({
            squares: state.squares.map((square) =>
                from.id === square.id ? { ...square, holdsItem: null } : square
            ),
        })),
    draggedItem: { from: null, type: null },
    setDraggedItem: (from, type) =>
        set({ draggedItem: { from: from, type: type } }),
}));

export default useItemsStateStore;
