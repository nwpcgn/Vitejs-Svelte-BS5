import { writable } from 'svelte/store'

function createCount() {
	const { subscribe, set, update } = writable(0)

	return {
		subscribe,
		increment: (int = 1) => update((n) => n + int),
		decrement: (int = 1) => update((n) => n - int),
		reset: () => set(0)
	}
}

export const _count = createCount()
