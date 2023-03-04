<script>
	import "../app.css";
	import SimpleBar from "$lib";
	const data = Array.from({ length: 200 }).map((_, index) => ({
		text: `Line ${index + 1}`,
	}));
</script>

<p>If no class passed, expand to full height of parent with an inline style</p>
<div class="constrain">
	<SimpleBar>
		<ul class="list">
			{#each data as { text }}
				<li class="list-item">{text}</li>
			{/each}
		</ul>
	</SimpleBar>
</div>

<p>If a class is passed, apply no inline style</p>
<p>Be careful - any classes used must be available at a global scope</p>
<SimpleBar class="constrain">
	<ul class="list">
		{#each data as { text }}
			<li class="list-item">{text}</li>
		{/each}
	</ul>
</SimpleBar>

<p>An inline style can also be set directly</p>
<SimpleBar style="width:500px;height:200px">
	<ul class="list">
		{#each data as { text }}
			<li class="list-item">{text}</li>
		{/each}
	</ul>
</SimpleBar>

<!-- TODO: Mention that flexbox items require a height to be set -->
<style>
	:global(.constrain) {
		width: 500px;
		height: 200px;
	}
</style>
