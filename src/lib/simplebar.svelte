<script lang="ts">
	import type { SimpleBarOptions } from "simplebar-core";
	import SimpleBar from "simplebar";
	import { createEventDispatcher, onDestroy, onMount } from "svelte";

	export let options: SimpleBarOptions = {};
	export let contentClass = "";

	// Export for binding but do not require as a prop
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let element: HTMLDivElement = undefined as any;
	let simplebar: SimpleBar;

	const dispatch = createEventDispatcher<{ mount: { simplebar: SimpleBar } }>();
	onMount(() => {
		simplebar = new SimpleBar(element, options);
		dispatch("mount", { simplebar });
	});
	onDestroy(() => simplebar?.unMount());

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
					<div class="simplebar-content {contentClass}">
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
