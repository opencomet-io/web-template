import { create, StateCreator } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

import env from 'utils/env';

const middleware = (s: StateCreator<PersistentState, [], []>) =>
  devtools(
    persist(s, {
      name: 'persistent_store_storage',
      storage: createJSONStorage(() => localStorage),
    }),
    {
      name: 'Persistent Store',
      enabled: env.DEBUG,
    }
  );

interface PersistentState {}

const usePersistentStore = create<PersistentState>()(
  middleware((set, get) => ({}))
);

export default usePersistentStore;
