<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import CusButton from '@/components/CusButton.vue'
</script>

<template>
  <dashboard-layout>
    <div class="flex flex-col">
      <div>
        <h3 class="mb-5 font-semibold text-4.5xl leading-[48.41px]">Convert your money <br>
          between currencies fast!</h3>
        <p class="text-base text-accent-gray-800 w-108 max-w-[90vw]">Make international transfers to local bank accounts
          and
          mobile money wallets.</p>
      </div>
      <div class="grid grid-cols-2 items-center">
        <img src="@/assets/images/conversion.svg" alt="" />

        <div class="p-6 flex flex-col shadow-md rounded-[10px]">
          <div class="rounded-2xl bg-accent-gray-100 flexBetween p-4">
            <div class="flex flex-col gap-1"><span class="text-sm font-medium">You pay</span><span
                class="font-medium text-2.5xl text-accent-gray-600">0</span></div>
            <div class="rounded-full flexMiddle gap-2 p-1 cursor-pointer bg-accent-gray-300">
              <img src="@/assets/icons/circle-flags-us.svg" alt="">
              <span class="font-semibold text-base">USD</span>
              <img src="@/assets/icons/arrow-downward.svg" alt="">
            </div>
          </div>

          <div class="flex flex-col my-3 mx-6">
            <div class="relative flex items-center mb-3">
              <div class="h-6 w-6 flex items-center justify-center rounded-full bg-accent-gray-200 z-10"><img
                  src="@/assets/icons/close.svg" alt="" /></div>
              <div class="absolute left-2.5 -top-[50%] h-12 w-0.5 text-red-300 bg-accent-gray-200 z-0"></div>
              <div class="ml-3 text-sm text-accent-gray-700 font-normal"><span class="font-semibold">NGN 720 =</span> USD
                1.00</div>
            </div>
            <div class="relative flex items-center mb-3">
              <div class="h-6 w-6 flex items-center justify-center rounded-full bg-accent-gray-200 z-10"><img
                  src="@/assets/icons/minus.svg" alt="" /></div>
              <div class="absolute left-2.5 -top-[50%] h-12 w-0.5 text-red-300 bg-accent-gray-200 z-0"></div>
              <div class="ml-3 text-sm text-accent-gray-700 font-normal"><span class="font-semibold">Fee</span> 24.00
              </div>
            </div>
            <div class="relative flex items-center">
              <div class="h-6 w-6 flex items-center justify-center rounded-full bg-accent-gray-200 z-10"><img
                  src="@/assets/icons/clock.svg" alt="" /></div>
              <div class="absolute left-2.5 -top-[50%] h-12 w-0.5 text-red-300 bg-accent-gray-200 z-0"></div>
              <div class="ml-3 text-sm text-accent-gray-700 font-normal">2 min</div>
            </div>
          </div>

          <div class="rounded-2xl bg-accent-gray-100 flexBetween p-4 mb-10">
            <div class="flex flex-col gap-1"><span class="text-sm font-medium">You get</span><span
                class="font-medium text-2.5xl text-accent-gray-600">0</span></div>
            <div class="rounded-full flexMiddle gap-2 p-1 cursor-pointer bg-accent-gray-300">
              <img src="@/assets/icons/circle-flags-ng.svg" alt="">
              <span class="font-semibold text-base">NGN</span>
              <img src="@/assets/icons/arrow-downward.svg" alt="">
            </div>
          </div>
          <cus-button variant="green-bg">Convert</cus-button>
        </div>
      </div>

    </div>
  </dashboard-layout>
</template>

<style scoped></style>