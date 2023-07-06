import { create } from "zustand";

const useItemsStateStore = create((set) => ({
    squares: [],
    draggedItem: { fromSquareId: null, type: null },
    loadSquares: (newSquares) => set(() => ({ squares: newSquares })),
    addSquare: (square) =>
        set((state) => ({ squares: [...state.squares, square] })),
    moveItem: (to, item) =>
        set((state) => {
            let newState = state;
            newState = {
                squares: newState.squares.map((square) => {
                    let newSquare = square;
                    if (item.fromSquareId && item.fromSquareId === square.id) {
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
    removeItem: (fromSquareId) =>
        set((state) => ({
            squares: state.squares.map((square) =>
                fromSquareId === square.id
                    ? { ...square, holdsItem: null }
                    : square
            ),
        })),
    setDraggedItem: (fromSquareId, type) =>
        set({ draggedItem: { fromSquareId: fromSquareId, type: type } }),
}));

export default useItemsStateStore;
