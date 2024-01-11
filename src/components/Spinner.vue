<script setup>
const props = defineProps({
  isLoading: Boolean,
})
</script>

<template>
  <div v-if="isLoading" class="flex items-center justify-center flex-col">
    <div
      class="border-[5px] border-solid border-gray-300 border-t-[5px] border-t-accent-gray-700 rounded-full w-6 h-6 animate-spin">
    </div>
  </div>
</template>

<style scoped></style>
