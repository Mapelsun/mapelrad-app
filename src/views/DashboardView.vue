<script setup>
import { ref } from 'vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import CusButton from '@/components/CusButton.vue'
import ProgressBar from '@/components/ProgressBar.vue'

const currentStep = ref(1)

const test = () => { console.log('clicked') }
</script>

<template>
  <dashboard-layout>
    <div class="p-4 bg-accent-gray-100 rounded-[20px] w-full h-min">
      <h3 class="font-semibold text-2xl mb-2">Hello!<br>Let’s get you set up</h3>

      <progress-bar :currentStep="currentStep" />

      <p class="mb-4 text-base text-accent-gray-800"><span class="font-bold">Step 1:</span> Tell us more about your
        business to get started.</p>

      <cus-button @click="test" variant="green-bg" custom-classes="flexCenter gap-2 w-56 max-w-[90vw]"><span>Continue
          compliance</span><img src="@/assets/icons/arrow-right.svg" alt="" /></cus-button>
    </div>
  </dashboard-layout>
</template>

<style scoped></style>