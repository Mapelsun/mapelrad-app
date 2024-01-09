<script setup>
const props = defineProps({})
</script>

<template>
<div class="bg-white rounded-2xl p-6 w-126 max-w-[90vw]">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot name="main"></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
</template>

<style scoped>
</style>
