<script lang="ts">
	import svelteLogo from './assets/svelte.svg'
	import viteLogo from '/vite.svg'
	import Counter from './lib/Counter.svelte'
</script>

<section class="container py-5">
	<div class="py-2">
		<span>
			<img src={viteLogo} class="logo" alt="Vite Logo" />
		</span>
		<span>
			<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
		</span>
	</div>

	<header class="py-2">
		<h1>Vite + Svelte</h1>

		<p>
			<Counter />
		</p>
    <p>
    <a class="btn btn-primary" href="#/settings" role="button">Link</a>
    </p>

		<p class="lead">Click on the Vite and Svelte logos to learn more</p>
	</header>
</section>

<style>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
</style>
