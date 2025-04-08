<script lang="ts">
	import frog from '$lib/asset/frog.webp';
	// import Countdown from '$lib/component/Countdown.svelte';

	const dateOptions: Intl.DateTimeFormatOptions = { timeZone: 'Europe/Berlin', weekday: 'long' };
	const isWednesday: boolean =
		new Date().toLocaleString('de-DE', dateOptions) === 'Mittwoch' || false;
</script>

<svelte:head>
	{#if isWednesday}
		<title>Es ist Mittwoch</title>
	{:else}
		<title>Es ist nicht Mittwoch</title>
	{/if}
</svelte:head>

{#if isWednesday || import.meta.env.DEV}
	<div class="container m-auto flex h-svh flex-col items-center justify-center">
		<div class="space-y-5 text-center text-neutral-700 dark:text-white">
			<h1 class="font-yamafont text-5xl">Es Ist Mittwoch</h1>
			<img src={frog} alt="frog" id="frog-logo" class="h-auto w-96 object-contain" />
			<h1 class="font-yamafont text-5xl">Meine Kerle</h1>
		</div>
	</div>
{/if}

<style lang="postcss">
	#frog-logo {
		filter: drop-shadow(0 0 2em theme(colors.primary));
	}
</style>
