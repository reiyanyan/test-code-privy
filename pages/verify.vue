<template>
  <div class="flex flex-col gap-y-8">
    <p class="text-sm mb-8">Today 31 Januari 2022</p>
    <div
      class="flex flex-col p-8 gap-8 border border-secondary rounded-lg font-sans"
    >
      <div class="flex flex-col gap-0.5">
        <p class="text-lg font-semibold">OTP Verification</p>
        <p class="text-sm text-[#8E8EA3] font-light">
          Insert OTP code sent to your phone
        </p>
      </div>
      <div class="flex flex-row gap-x-6">
        <input
          ref="otpInput"
          v-for="(item, index) in 4"
          :key="index"
          class="flex text-center w-full rounded-md px-4 py-2.5 font-bold bg-transparent border border-secondary focus:border-0 focus:outline-none focus:ring-1 focus:ring-primary focus:text-primary"
          type="text"
          pattern="\d*"
          maxlength="1"
          @keyup="keyupOtp(index)"
        />
        <Button variant="primary">Verify</Button>
      </div>
    </div>
    <div class="flex flex-row items-center gap-2.5 text-primary cursor-pointer">
      <Icon>refresh</Icon>
      <p class="font-medium text-base">Resend OTP Code</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const otpInput = ref<HTMLInputElement[]>();

const keyupOtp = (index: number) => {
  const elementIndex = otpInput.value?.[index];
  console.log("masik of");
  if (elementIndex?.value.length == elementIndex?.maxLength) {
    elementIndex?.classList.add("filled");
  } else {
    elementIndex?.classList.remove("filled");
  }
};

onMounted(() => {
  otpInput.value?.[0].classList.add("filled");
});
</script>

<style lang="scss" scoped>
.filled {
  @apply border-0 outline-none ring-1 ring-primary text-primary;
}
</style>
