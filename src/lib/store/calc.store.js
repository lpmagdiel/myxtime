import {createStore} from "zustand/vanilla";
import zustandToSvelte from './zustandToSvelte';

const useStoreCalc = createStore((set) => ({
    totalTime: 0,
    indexActive: 0,
    allIndex: [0, 0, 0, 0],
    addTime: (time) => set({totalTime:  time}),
    uploadsElements: (newElements) => set({allIndex: newElements}),
    uploadIndexActive: (newIndex) => set({ indexActive: newIndex }),
    clear: () => set({ indexActive: 0, allIndex: [0, 0, 0, 0] }),
}));

export default zustandToSvelte(useStoreCalc);