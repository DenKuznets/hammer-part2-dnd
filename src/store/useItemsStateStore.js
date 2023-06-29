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
    addSquare: (square) => set((state) => ({squares: [...state.squares, square]}))
}));

export default useItemsStateStore;
