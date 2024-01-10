<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
import SideNav from '@/components/SideNav.vue'
</script>

<template>
  <div class="flex flex-col">
    <header-nav />
    <hr class="w-full text-accent-gray-200" />
    <div class="max-container flex gap-8 my-4 h-[90vh]">
      <side-nav />
      <slot />
    </div>
  </div>
</template>

<style scoped></style>

