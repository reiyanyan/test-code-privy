<template>
  <div
    class="flex flex-col p-8 gap-8 border border-secondary rounded-lg font-sans"
  >
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-col">
        <p class="text-lg font-semibold">Profile Information</p>
        <p class="font-light text-sm text-[#8E8EA3]">Your personal data</p>
      </div>
      <Icon class="text-primary">border_color</Icon>
    </div>
    <div class="flex flex-row w-full justify-between">
      <div class="flex flex-col gap-y-8 max-w-[264px] w-full">
        <p class="text-lg font-semibold">Information Detail</p>
        <Input label="Name *"></Input>
        <Dropdown
          v-model="selectedGender"
          title="Gender"
          :options="genderOptions"
        ></Dropdown>
        <Input label="Home Town"></Input>
        <TextArea label="Bio" :rows="5"></TextArea>
        <div class="flex flex-row gap-4">
          <Button variant="outlined-secondary">Discard</Button>
          <Button variant="primary">Update</Button>
        </div>
      </div>
      <div class="flex flex-col gap-y-8 max-w-[224px] w-full">
        <p>Profile Picture</p>
        <div class="flex flex-col gap-y-6">
          <img
            class="h-[224px] w-[224px] object-cover"
            src="https://via.placeholder.com/200x400"
            alt=""
          />
          <div class="flex flex-col gap-3 w-full items-center">
            <Button variant="primary"> Upload Media </Button>
            <p class="text-sm font-light">PNG, JPEG or GIF up to 2MB</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { OptionProps } from "../global/Dropdown.vue";
const selectedGender = reactive<OptionProps>({
  title: "",
  value: "",
});
const genderOptions = reactive<Array<OptionProps>>([
  {
    title: "Male",
    value: "male",
  },
  {
    title: "Female",
    value: "female",
  },
]);
</script>
