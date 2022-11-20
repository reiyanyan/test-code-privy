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
        <Input v-model="field.phone" label="Phone Number" type="number"></Input>
        <Input
          v-model="field.password"
          label="Password"
          type="password"
        ></Input>
      </div>
    </div>
    <div class="flex flex-row gap-4">
      <Button variant="outlined-secondary">Reset</Button>
      <Button variant="primary" @click="submitRegister">Register</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { OptionProps } from "../global/Dropdown.vue";
import { useAuthStore } from "@/store/module/AuthModule";

const store = useAuthStore();

const field = reactive<Record<string, string>>({
  phone: "",
  password: "",
  countryCode: "",
});

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

const submitRegister = async () => {
  const phone = field.countryCode.concat(field.phone);
  store
    .doRegister(phone, field.password)
    .then((val) => console.log("success lur"))
    .catch((err) => console.log("err", err));
};

watch(
  () => selectedCountry,
  (val) => {
    field.countryCode = String(val.value);
  },
  {
    deep: true,
  }
);
</script>
