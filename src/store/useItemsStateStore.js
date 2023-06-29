import { create } from "zustand";
import { ItemTypes } from "../utils/Constants";

const useItemsStateStore = create((set) => ({
    items: [
        {
            type: ItemTypes.CHAIR,
            img: "chair.png",
        },
    ],
    squares: [],
    addSquare: (square) =>
        set((state) => ({ squares: [...state.squares, square] })),
    moveItemToSquare: (place, item) =>
        set((state) => {
            console.log(state, place, item);
            return {
                squares: [{ id: 1, droppable: true, holdsItem: item.type }],
            };
        }),
    droppable: null,
    setDroppable: (square) => set({ droppable: square }),
}));

export default useItemsStateStore;
