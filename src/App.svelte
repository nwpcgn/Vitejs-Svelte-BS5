<script lang="ts">
  import {Collapse} from 'bootstrap'
	import Appbar from './lib/components/Appbar.svelte'
	import Settings from './Settings.svelte'
	import Start from './Start.svelte'
	import Router from 'svelte-spa-router'
</script>

<Appbar />

<main class="main">
	<Router
		routes={{
			'/settings': Settings,
			'*': Start
		}} />
</main>
