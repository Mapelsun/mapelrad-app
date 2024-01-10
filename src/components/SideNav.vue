<script setup>
import { ref } from 'vue';
import SwitchToggle from '@/components/SwitchToggle.vue'

const isEnabled = ref(true)
</script>

<template>
  <div class="flex flex-col w-50">
    <div class="singleNav">
      <router-link to="/dashboard/get-started" exact>
        <img src="@/assets/icons/rocket-lunch.svg" alt="" />
        <span>Get Started</span>
      </router-link>
      <router-link to="/dashboard" exact>
        <img src="@/assets/icons/home.svg" alt="" />
        <span>Home</span>
      </router-link>
      <router-link to="/dashboard/cash" exact>
        <img src="@/assets/icons/money.svg" alt="" />
        <span>Cash</span>
        <img src="@/assets/icons/arrow-downward-gray.svg" alt="" class="ml-auto" />
      </router-link>
      <router-link to="/dashboard/fx-conversion" exact>
        <img src="@/assets/icons/convert.svg" alt="" />
        <span>FX Conversion</span>
      </router-link>
      <router-link to="/dashboard/card" exact>
        <img src="@/assets/icons/card.svg" alt="" />
        <span>Cards</span>
      </router-link>
      <router-link to="/dashboard/customers" exact>
        <img src="@/assets/icons/profile-user.svg" alt="" />
        <span>Customers</span>
      </router-link>
    </div>
    <div class="singleNav mt-[30vh]">
      <div to=""
        class="flex items-center gap-3 mb-6 cursor-pointer bg-accent-gray-200 rounded-[10px] p-2 justify-between">
        <span>Sandbox mode</span>
        <switch-toggle v-model="isEnabled" />
      </div>
      <router-link to="/dashboard/send-invite" exact>
        <img src="@/assets/icons/plus.svg" alt="" />
        <span>Invite people</span>
        <img src="@/assets/icons/arrow-upward-gray.svg" alt="" class="ml-auto" />
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
