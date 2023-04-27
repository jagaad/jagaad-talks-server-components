let html = String.raw;

export let emptyCode = html`
	<template>
		<!-- Empty template -->
	</template>
`;

export let fullCode = html`
	<template>
		<div>
			<h1 class="text-blue-800 text-4xl font-sans text-center py-5">
				Jagaad Talks
			</h1>
			<div class="grid grid-cols-2 gap-2">
				<div class="border-2 p-5">
					<h2 class="text-3xl">🧑‍💻 Code</h2>
					<code :style="{ tabSize: 2 }">
						<pre v-html="highlighted.value"></pre>
					</code>
				</div>
				<div class="border-2 p-5">
					<h2 class="text-3xl mb-5">✨ Followers</h2>
					<ul class="font-bold text-green-700">
						<li v-for="follower in followers">📀 {{ follower }}</li>
					</ul>
				</div>
			</div>
		</div>
	</template>

	<script setup lang="ts">
		import lodash from 'lodash';
		import 'highlight.js/styles/github.css';
		import h from 'highlight.js';

		let props = defineProps<{ code: string }>();

		let url = 'https://api.github.com/users/jagaad/followers';
		let response = await useFetch<{ login: string }[]>(url);
		let users = response.data.value ?? [];
		let followers = users.map((u) => lodash.startCase(u.login));

		let highlighted = computed(() => h.highlightAuto(props.code));
	</script>
`;
