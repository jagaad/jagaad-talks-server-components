<script setup lang="ts">
import lodash from 'lodash';

let props = withDefaults(defineProps<{ username?: string }>(), {
	username: 'jagaad',
});

let url = computed(() => getUrl(props.username));
let { data, error } = await useFetch<{ login: string }[]>(url);
let followers = lodash.map(data.value ?? [], (u) => u.login);

function getUrl(username: string) {
	return `https://api.github.com/users/${username}/followers`;
}
</script>

<template>
	<div class="border-2 p-5">
		<div v-if="error">{{ error.message }}</div>
		<div v-else>
			<h2 class="text-3xl mb-5">✨ {{ props.username }} Followers</h2>
			<ul class="font-bold text-green-700">
				<li v-for="follower in followers">📀 {{ follower }}</li>
			</ul>
		</div>
	</div>
</template>
