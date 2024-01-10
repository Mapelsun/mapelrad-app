<script setup>
import { ref } from 'vue';

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const isChecked = ref(props.modelValue);

const toggleSwitch = () => {
  isChecked.value = !isChecked.value;
  emit('update:modelValue', isChecked.value);
};

</script>
<template>
  <div class="flex items-center space-x-2 cursor-pointer">
    <label class="relative flex items-center h-4 rounded-full p-1 w-6 transition-colors duration-200 ease-in-out"
      :class="{ 'bg-primary': isChecked, 'bg-gray-200': !isChecked }">
      <input type="checkbox" class="absolute opacity-0 w-0 h-0" :checked="isChecked" @change="toggleSwitch" />
      <span
        class="absolute z-50 left-[2px] w-[14px] h-[14px] bg-white rounded-full transform transition-transform duration-200 ease-in-out"
        :class="{ 'translate-x-[7px]': isChecked }"></span>
    </label>
  </div>
</template>

<style scoped></style>







