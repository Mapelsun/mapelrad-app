<script setup>
import { ref, computed } from 'vue'
import { useGlobalStore } from '@/stores/global'
const global = useGlobalStore()

const fullName = computed(() => `${global.authUser.first_name} ${global.authUser.last_name}`)

</script>

<template>
  <div class="max-container flexBetween">
    <img src="@/assets/images/logo.svg" alt="logo" class="cursor-pointer" />
    <div class="flex gap-5">
      <div class="flex items-center gap-1 cursor-pointer">
        <img src="@/assets/icons/code.svg" alt="" />
        <span class="font-semibold text-base">Developer</span>
        <img src="@/assets/icons/arrow-downward.svg" alt="" />
      </div>
      <img src="@/assets/icons/bell.svg" alt="" class="cursor-pointer" />
      <div class="flex gap-2">
        <img src="@/assets/images/ellipse.svg" alt="" />
        <div class="flex flex-col">
          <span class="font-semibold text-sm">{{ fullName || 'John Doe' }}</span>
          <span class="font-medium text-xs text-accent-gray-500">Maplerad Technologies</span>
        </div>
        <img src="@/assets/icons/arrow-downward.svg" alt="" class="cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
