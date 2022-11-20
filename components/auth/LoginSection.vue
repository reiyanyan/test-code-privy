<template>
  <div
    class="flex flex-col p-8 gap-8 border border-secondary rounded-lg font-sans"
  >
    <p class="text-lg font-semibold">Login Account</p>
    <div class="flex flex-col gap-6">
      <Input v-model="field.phone" label="Phone Number" type="number"></Input>
      <Input v-model="field.password" label="Password" type="password"></Input>
    </div>
    <div class="flex flex-row gap-4">
      <Button variant="outlined-secondary" @click="onReset">Reset</Button>
      <Button variant="primary" @click="submitLogin">Login</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/store/module/AuthModule";

const store = useAuthStore();

const field = reactive<Record<string, string>>({
  phone: "",
  password: "",
});

const onReset = () => {
  Object.assign(field, {
    phone: "",
    password: "",
  });
};

const submitLogin = async () => {
  await store
    .authLogin(field.phone, field.password)
    .then((val) => {
      console.log("oke luuurrrrr");
    })
    .catch((err) => {
      console.log("err", err);
    });
};
</script>
