<template>
	<div>
		<h1 class="text-blue-800 text-4xl font-sans text-center py-5">
			Jagaad Talks
		</h1>
		<div class="grid grid-cols-2 gap-2 p-2">
			<Highlight :code="code" />
			<Followers :username="username" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { emptyCode, fullCode } from '~/utils/code';

let route = useRoute();
let username = computed(() => route.query.u as string);
let code = ref(fullCode);

onMounted(() => {
	setTimeout(() => {
		code.value = emptyCode;
	}, 5000);
});
</script>
