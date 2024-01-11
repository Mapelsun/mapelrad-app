<script setup>
import { computed } from 'vue'
import Spinner from '@/components/Spinner.vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: [String, Array, Object],
    default: '',
  },
  onClick: {
    type: Function,
    default: () => { },
  },
  variant: {
    type: String,
    default: 'default',
  },
})

const computedClasses = computed(() => {
  return [
    'rounded-[10px] font-semibold text-primary py-2',
    props.customClasses,
    getVariantClass(),
    { 'cursor-not-allowed opacity-50': props.disabled }
  ];
})

const getVariantClass = () => {
  switch (props.variant) {
    case 'green-bg':
      return 'text-base bg-accent-green';
    case 'gray-bg':
      return 'text-lg bg-accent-gray-300';
    default:
      return '';
  }
}

const handleClick = () => {
  if (!props.disabled) {
    props.onClick()
  }
}
</script>

<template>
  <button :class="computedClasses" :type="type" :disabled="disabled" @click="handleClick">
    <Spinner v-if="loading" :isLoading="loading" />
    <div v-else class="flexCenter gap-2">
      <slot></slot>
    </div>
  </button>
</template>

<style scoped></style>
