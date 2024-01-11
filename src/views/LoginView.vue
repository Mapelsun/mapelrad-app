<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AuthCard from '@/components/AuthCard.vue'
import CusButton from '@/components/CusButton.vue'
import apiServices from '@/utils/api-services.js'
import { useGlobalStore } from '@/stores/global'

const global = useGlobalStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const isLoading = ref(false)

const submitForm = async () => {
  const payload = { email: email.value, password: password.value }
  try {
    isLoading.value = true
    const response = await apiServices.loginUser(payload)
    if (response.status && response.message === 'OTP Sent') {
      global.setUser(payload)
      router.push('/otp-verification')
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <auth-layout>
    <auth-card>
      <template #header>
        <h2 class="black-32 mb-8">Sign in</h2>
      </template>

      <template #main>
        <div class="flex flex-col">
          <form class="flex flex-col mb-4" @submit.prevent="submitForm">
            <div class="flex flex-col mb-6">
              <label for="email" class="font-semibold text-sm mb-1">Email</label>
              <input type="email" v-model="email" placeholder="john@gmail.com"
                class="bg-accent-gray-100 py-2 px-4 rounded-[10px] font-normal text-base text-black">
            </div>
            <div class="flex flex-col mb-6">
              <label for="password" class="font-semibold text-sm mb-1">Password</label>
              <input type="password" v-model="password" placeholder="(8+ characters)"
                class="bg-accent-gray-100 py-3 px-4 rounded-[10px] font-normal text-base">
            </div>
            <cus-button type="submit" variant="green-bg" :disabled="!email || !password" :loading="isLoading">Sign
              in</cus-button>
          </form>
          <p class="text-secondary text-sm text-center cursor-pointer mb-8">Forgot your password?</p>
          <cus-button variant="gray-bg">Don’t have an account? Create one</cus-button>
        </div>
      </template>
    </auth-card>
  </auth-layout>
</template>

<style scoped></style>
