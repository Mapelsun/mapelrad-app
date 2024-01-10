<script setup></script>

<template>
  <div class="flex flex-col w-50">
    <div class="singleNav">
      <router-link to="">
        <img src="@/assets/icons/rocket-lunch.svg" alt="" />
        <span>Get Started</span>
      </router-link>
      <router-link to="">
        <img src="@/assets/icons/home.svg" alt="" />
        <span>Home</span>
      </router-link>
      <router-link to="">
        <img src="@/assets/icons/money.svg" alt="" />
        <span>Cash</span>
        <img src="@/assets/icons/arrow-downward-gray.svg" alt="" class="ml-auto" />
      </router-link>
      <router-link to="">
        <img src="@/assets/icons/convert.svg" alt="" />
        <span>FX Conversion</span>
      </router-link>
      <router-link to="">
        <img src="@/assets/icons/card.svg" alt="" />
        <span>Cards</span>
      </router-link>
      <router-link to="">
        <img src="@/assets/icons/profile-user.svg" alt="" />
        <span>Customers</span>
      </router-link>
    </div>
    <div class="singleNav mt-[30vh]">
      <router-link to="" class="bg-accent-gray-200 rounded-[10px] p-4 justify-between">
        <span>Sandbox mode</span>
        <img src="@/assets/images/switch.svg" alt="" />
      </router-link>
      <router-link to="">
        <img src="@/assets/icons/plus.svg" alt="" />
        <span>Invite people</span>
        <img src="@/assets/icons/arrow-upward-gray.svg" alt="" class="ml-auto" />
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
