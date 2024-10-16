<template>
    <Head :title="` | ${$page.component}`"/>

    <p class="cpp">okko</p>
    <h1>HELLO  Homepage</h1>

    <Link href="/" class="mt-[600px] block" preserve-scroll> Refresh </Link>

</template>

<script setup>
import Layout from '../Layouts/layout.vue';
defineOptions({Layout : Layout});
</script>

<style scoped>

</style>
