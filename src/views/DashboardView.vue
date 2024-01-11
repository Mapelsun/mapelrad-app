<script setup>
import { ref } from 'vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import CusButton from '@/components/CusButton.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import OverviewChart from '@/components/OverviewChart.vue'
import OverviewSummary from '@/components/OverviewSummary.vue'
import ReportsSummary from '@/components/ReportsSummary.vue'

const currentStep = ref(1)
</script>

<template>
  <dashboard-layout>
    <div class="flex flex-col w-full">
      <div class="p-4 bg-accent-gray-100 rounded-[20px] w-full h-min mb-6">
        <h3 class="subHeader mb-2">Hello!<br>Let’s get you set up</h3>

        <progress-bar :currentStep="currentStep" />

        <p class="mb-4 text-base text-accent-gray-800"><span class="font-bold">Step 1:</span> Tell us more about your
          business to get started.</p>

        <cus-button variant="green-bg" custom-classes="flexCenter gap-2 w-56 max-w-[90vw]"><span>Continue
            compliance</span><img src="@/assets/icons/arrow-right.svg" alt="" /></cus-button>
      </div>

      <div>
        <h3 class="subHeader mb-2">Overview</h3>
        <div class="flex gap-2 cursor-pointer"><span class="text-sm text-accent-gray-500 font-medium">Last 30
            days</span><img src="@/assets/icons/arrow-downward-gray.svg" alt="" /></div>
        <div class="flex gap-4 overflow-x-scroll">
          <overview-chart />
          <overview-summary />
        </div>
      </div>

      <div class="pb-20">
        <div class="flexBetween">
          <div class="mb-3">
            <h3 class="subHeader mb-3">Reports</h3>
            <p class="text-sm text-accent-gray-500 font-medium">View all transaction made to your account</p>
          </div>
          <div class="rounded-[10px] flexMiddle gap-2 p-2 cursor-pointer bg-accent-gray-300">
            <span class="font-semibold text-sm">Export</span>
            <img src="@/assets/icons/arrow-downward.svg" alt="">
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <reports-summary />
          <reports-summary />
          <reports-summary />
          <reports-summary />
        </div>
      </div>
    </div>
  </dashboard-layout>
</template>

<style scoped></style>