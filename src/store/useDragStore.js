import { create } from "zustand";

const useDragStore = create((set) => ({
    isDragging: false,
    stopDragging: () => set({ isDragging: false }),
    startDragging: () => set({ isDragging: true }),
}));

export default useDragStore;
