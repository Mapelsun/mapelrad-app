<script setup></script>

<template>
  <div class="bg-auth bg-no-repeat bg-cover min-h-screen flexCenter">
    <div class="flexDown">
      <img src="@/assets/images/logo-full.svg" alt="logo" class="mb-5" />
      <slot />
      <ul
        class="bg-accent-gray-400 flex text-sm font-medium text-primary mt-auto rounded-full py-2 px-3 gap-2 sm:gap-6 [&_li]:cursor-pointer absolute bottom-5 max-w-[90vw]">
        <li>Privacy & Terms</li>
        <li>Contact us</li>
        <li class="flexMiddle gap-2"><span>Change region</span><img src="@/assets/icons/arrow-downward.svg" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>

