<script setup>
import { ref, onMounted } from 'vue'
const emit = defineEmits(['otp-complete'])

const otpDigits = ref(['', '', '', '', '', '']);
const digitInputRefs = ref([]);

const handleInput = (index) => {
  otpDigits.value[index] = otpDigits.value[index].replace(/\D/g, '');

  if (otpDigits.value[index].length === 1 && index < 5) {
    digitInputRefs.value[index + 1]?.focus();
  }

  if (otpDigits.value.join('').length === 6) {
    emit('otp-complete', otpDigits.value.join(''));
  }
};

const handleDelete = (index) => {
  if (index > 0) {
    otpDigits.value[index] = '';
    digitInputRefs.value[index - 1]?.focus();
  } else if (index === 0) {
    otpDigits.value[index] = '';
  }
};

const focusFirstInput = () => {
  digitInputRefs.value[0]?.focus();
};

onMounted(() => {
  digitInputRefs.value = digitInputRefs.value.map((ref) => ref);
  focusFirstInput();
});

</script>

<template>
  <div class="flex justify-between gap-2">
    <input v-for="(digit, index) in otpDigits" :key="index" v-model="otpDigits[index]" type="text" maxlength="1"
      @input="handleInput(index)" @keydown.delete="handleDelete(index)" ref="digitInputRefs" :refInFor="true"
      class="rounded bg-accent-gray-100 w-13 h-13 text-center" />
  </div>
</template>

<style scoped></style>
