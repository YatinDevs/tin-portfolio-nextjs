import create from "zustand";

const useModalStore = create((set, get) => ({
  isDark: false,
  toggleTheme: () => set({ isDark: !get().isDark }),
}));

export default useModalStore;
