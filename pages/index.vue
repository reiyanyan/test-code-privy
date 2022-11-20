<template>
  <div class="flex flex-col gap-y-16">
    <div class="flex flex-col font-sans gap-0.5">
      <p class="text-3xl font-bold">Username</p>
      <p class="text-sm font-normal">Level 1 - #SG7689891</p>
    </div>
    <Tab v-model="selectedTab" :headers="headersTab">
      <template #information>
        <IndexInformation></IndexInformation>
      </template>
      <template #career>
        <IndexCareer></IndexCareer>
      </template>
      <template #education>
        <IndexEducation></IndexEducation>
      </template>
      <template #gallery>
        <IndexGallery></IndexGallery>
      </template>
    </Tab>
  </div>
</template>

<script lang="ts" setup>
type TabProps = "information" | "career" | "education" | "gallery" | "";

const headersTab = reactive<Array<TabProps>>([
  "information",
  "career",
  "education",
  "gallery",
]);
const selectedTab = ref<TabProps>("gallery");
</script>
