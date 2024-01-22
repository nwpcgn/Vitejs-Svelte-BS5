<script>
	import { _count, run, sleep } from './'
	let op1 = false
	$: className = `btn ${op1 ? 'btn-primary' : 'btn-secondary'}`
	let STATE = {
		start: 'start',
		run: 'running',
		end: 'ended'
	}
	Object.freeze(STATE)
	let state = ''
	state = STATE.start

	async function handleReset() {
		state = STATE.end
		_count.reset()
    await sleep(2000)
    state = STATE.start
	}

	$: if ($_count >= 1) {
		state = STATE.run
	}
</script>

<div class="btn-group" role="group">
	<input type="checkbox" class="btn-check" id="btncheck3" bind:checked={op1} />
	<label class={className} for="btncheck3">Counter: {$_count}</label>
	<button class={className} on:click={() => _count.increment(1)}>Earn</button>
	<button disabled class={className} on:click={() => _count.decrement(1)}
		>Spend</button>
	<button class={className} on:click={handleReset}>Reset</button>
</div>
<span>{state}</span>
