import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

import env from 'utils/env';

const middleware = (s: StateCreator<GlobalState, [], []>) =>
  devtools(s, {
    name: 'Global Store',
    enabled: env.NODE_ENV !== 'production',
  });

interface GlobalState {}

const useGlobalStore = create<GlobalState>()(middleware((set, get) => ({})));

export default useGlobalStore;
