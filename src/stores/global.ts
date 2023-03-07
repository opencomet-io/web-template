import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

import vars from 'utils/vars';

const middleware = (s: StateCreator<GlobalState, [], []>) =>
  devtools(s, {
    name: 'Global Store',
    enabled: vars.DEBUG,
  });

interface GlobalState {}

const useGlobalStore = create<GlobalState>()(middleware((set, get) => ({})));

export default useGlobalStore;
