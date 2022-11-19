<template>
  <div
    class="flex flex-col p-8 gap-8 border border-secondary rounded-lg font-sans"
  >
    <div class="flex flex-col gap-0.5">
      <p class="text-lg font-semibold">Create new Account</p>
      <p class="text-sm text-[#8E8EA3] font-light">
        Before you can join here, please create new account
      </p>
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-lg font-semibold">Account Detail</p>
      <div class="flex flex-col gap-6">
        <Dropdown
          v-model="selectedCountry"
          title="Select Country"
          :options="countryOptions"
        ></Dropdown>
        <Input label="Phone Number" type="number"></Input>
        <Input label="Password" type="password"></Input>
      </div>
    </div>
    <div class="flex flex-row gap-4">
      <Button variant="outlined-secondary">Reset</Button>
      <Button variant="primary">Register</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { OptionProps } from "../global/Dropdown.vue";

const selectedCountry = reactive<OptionProps>({
  title: "",
  value: "",
});
const countryOptions = reactive<Array<OptionProps>>([
  {
    title: "Indonesia (+62)",
    value: "62",
  },
  {
    title: "Canada (+1)",
    value: "1",
  },
]);
</script>
