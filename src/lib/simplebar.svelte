<script lang="ts">
	import type { SimpleBarOptions } from "simplebar-core";
	import SimpleBar from "simplebar";
	import { onMount } from "svelte";

	// Export for binding but do not require as a prop
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let element: HTMLDivElement = undefined as any;
	export let options: SimpleBarOptions = {};
	onMount(() => new SimpleBar(element, options));

	const style = $$props.style ?? ($$props.class ? undefined : "height:100%");
</script>

<div class={$$props.class} bind:this={element} {style}>
	<div class="simplebar-wrapper">
		<div class="simplebar-height-auto-observer-wrapper">
			<div class="simplebar-height-auto-observer" />
		</div>
		<div class="simplebar-mask">
			<div class="simplebar-offset">
				<div class="simplebar-content-wrapper">
					<div class="simplebar-content">
						<slot />
					</div>
				</div>
			</div>
		</div>
		<div class="simplebar-placeholder" />
	</div>
	<div class="simplebar-track simplebar-horizontal">
		<div class="simplebar-scrollbar" />
	</div>
	<div class="simplebar-track simplebar-vertical">
		<div class="simplebar-scrollbar" />
	</div>
</div>
