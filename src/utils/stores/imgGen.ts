import { create } from "zustand";

type imgGenStoreType = {
  img: string;
  mode: string;
  setImg: (img: string) => void;
  setMode: (mode: string) => void;
};

const imgGenStore = create<imgGenStoreType>((set) => ({
  img: "",
  mode: "",
  setImg: (img) => set({ img }),
  setMode: (mode) => set({ mode }),
}))();
