<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import AuthCard from '@/components/AuthCard.vue'
import CusButton from '@/components/CusButton.vue'

const test = () => { console.log("I was clicked here") }
</script>

<template>
  <auth-layout>
    <auth-card>
      <template #header>
        <h2 class="black-32 mb-8">Sign in</h2>
      </template>

      <template #main>
        <div class="flex flex-col">
          <form action="" class="flex flex-col mb-4">
            <div class="flex flex-col mb-6">
              <label for="email" class="font-semibold text-sm mb-1">Email</label>
              <input type="email" placeholder="john@gmail.com"
                class="bg-accent-gray-100 py-2 px-4 rounded-[10px] font-normal text-base text-black">
            </div>
            <div class="flex flex-col mb-6">
              <label for="password" class="font-semibold text-sm mb-1">Password</label>
              <input type="password" placeholder="(8+ characters)"
                class="bg-accent-gray-100 py-3 px-4 rounded-[10px] font-normal text-base">
            </div>
            <cus-button @click="test" variant="green-bg">Sign in</cus-button>
          </form>
          <p class="text-secondary text-sm text-center cursor-pointer mb-8">Forgot your password?</p>
          <cus-button @click="test" variant="gray-bg">Don’t have an account? Create one</cus-button>
          </div>
      </template>
    </auth-card>
  </auth-layout>
</template>

<style scoped></style>
