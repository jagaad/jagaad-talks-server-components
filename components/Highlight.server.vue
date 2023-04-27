<script setup lang="ts">
import 'highlight.js/styles/github.css';
import h from 'highlight.js';

let props = defineProps<{ code: string }>();
let highlighted = computed(() => h.highlightAuto(props.code));
</script>

<template>
	<div class="border-2 p-5">
		<h2 class="text-3xl">🧑‍💻 Code</h2>
		<code :style="{ tabSize: 2 }">
			<pre v-html="highlighted.value"></pre>
		</code>
	</div>
</template>
