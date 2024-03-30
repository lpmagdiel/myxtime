import { readable } from 'svelte/store';

export default function zustandToSvelte(zustandStore) {
  const svelteStore = readable(zustandStore.getState(), (set) => {
    zustandStore.subscribe((value) => set(value));
  });

  return {
    ...zustandStore,
    subscribe: svelteStore.subscribe
  };
}