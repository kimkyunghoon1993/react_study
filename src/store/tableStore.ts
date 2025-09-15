import { create } from "zustand";

interface TableRow {
  [key: string]: string | number;
}

interface TableState {
    data : TableRow[];
    addData : (item: TableRow) => void;
    removeData : (item: number) => void;
}

export const useTableStore = create<TableState>((set) => ({
    data: [],
    addData: (item) => 
        set((state) => ({
            data: [...state.data,item],
        })),
    removeData: (index) =>
        set((state) => ({
            data: state.data.filter((_,i) => i !== index),
        })),
}))