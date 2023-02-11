import { create, StateCreator } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

const middleware = (s: StateCreator<PersistentState, [], []>) =>
  devtools(
    persist(s, {
      name: 'persistent_store_storage',
      storage: createJSONStorage(() => localStorage),
    }),
    {
      name: 'Persistent Store',
      enabled: process.env.NODE_ENV !== 'production',
    }
  );

interface PersistentState {}

const usePersistentStore = create<PersistentState>()(
  middleware((set, get) => ({}))
);

export default usePersistentStore;
