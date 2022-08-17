import create from 'zustand';

export const useGlobalStore = create((set) => ({
  activeView: '#header',
  setActiveView: (newView) => set(() => ({ activeView: newView })),
}));
