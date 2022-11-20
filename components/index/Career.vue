<template>
  <div
    class="flex flex-col p-8 gap-8 border border-secondary rounded-lg font-sans"
  >
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-col">
        <p class="text-lg font-semibold">Career Information</p>
        <p class="font-light text-sm text-[#8E8EA3]">
          Information about your career
        </p>
      </div>
      <Icon class="text-primary">add</Icon>
    </div>
    <div class="flex flex-row w-full">
      <div class="flex flex-col gap-y-8 w-full">
        <Input label="Company Name"></Input>
        <Input label="Start From"></Input>
        <Input label="Ending In"></Input>
        <div class="flex flex-row gap-4">
          <Button variant="outlined-secondary">Discard</Button>
          <Button variant="primary">Add Career</Button>
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-28 gap-8">
      <div v-for="item in 4" :key="item" class="flex flex-col gap-2 text-base">
        <p class="font-bold">Company Name</p>
        <p class="font-light text-[#8E8EA3]">Jul 7, 2022 - Dec 8, 2022</p>
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
