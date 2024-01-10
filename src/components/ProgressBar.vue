<script setup>
import { ref } from 'vue';

const props = defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
})

const steps = ref([1, 2, 3, 4, 5])
</script>

<template>
  <div class="flex items-center space-x-28 mb-2">
    <div v-for="step in steps" :key="step" class="relative">
      <div
        :class="['h-6 w-6 flex items-center justify-center rounded-full bg-accent-gray-400', { 'bg-accent-green': step <= currentStep }]">
        <span class="text-sm font-bold">{{ step }}</span>
      </div>
      <div v-if="step < steps.length"
        :class="['absolute top-1/2 left-8 w-24 h-0.5 bg-accent-gray-400', { 'bg-accent-green': step < currentStep }]">
      </div>
    </div>
  </div>
</template>

<style scoped></style>
