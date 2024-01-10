<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AuthCard from '@/components/AuthCard.vue'
import CusButton from '@/components/CusButton.vue'
import OtpInput from '@/components/OtpInput.vue'
import apiServices from '@/utils/api-services.js'
import { useGlobalStore } from '@/stores/global'

const global = useGlobalStore()
const router = useRouter()

const otpVal = ref('')

const handleOtpVerification = async () => {
  const { email } = global.user
  const payload = { email, otp: otpVal.value }

  try {
    const response = await apiServices.verifyOtp(payload)
    if (response.status && response.message === 'Login successful') {
      global.setAuthUser(response.data)
      apiServices.setToken(response.data.token)
      router.push('/dashboard')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <auth-layout>
    <auth-card>
      <template #header>
        <div class="flex flex-col items-center mb-4">
          <h2 class="black-32 mb-2">Enter your OTP</h2>
          <p class="text-secondary text-sm text-center cursor-pointer mb-4 max-w-sm">
            To confirm your identity, enter the 6-digit sent to your email.
          </p>
        </div>
      </template>

      <template #main>
        <div class="flex flex-col">
          <div class="flex flex-col mb-6">
            <otp-input @otp-complete="(otp) => otpVal = otp" />
          </div>
          <cus-button @click="handleOtpVerification" variant="green-bg" custom-classes="mb-4"
            :disabled="!otpVal">Submit</cus-button>
          <p class="text-secondary text-sm text-center mb-8">
            Didn’t receive any code?
            <span class="text-accent-blue cursor-pointer">Resend</span>
          </p>
          <cus-button @click="router.back()" variant="gray-bg" custom-classes="flexCenter gap-2"><img
              src="@/assets/icons/arrow-back.svg" alt="" /><span>Go back to login</span></cus-button>
        </div>
      </template>
    </auth-card>
  </auth-layout>
</template>

<style scoped></style>
