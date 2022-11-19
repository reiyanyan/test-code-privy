<template>
  <div class="flex flex-col gap-y-8">
    <p class="text-sm">Today 31 Januari 2022</p>
    <Tab v-model="activeTab" :headers="headers">
      <template #login>
        <AuthLoginSection></AuthLoginSection>
      </template>
      <template #registration>
        <AuthRegistrationSection></AuthRegistrationSection>
      </template>
    </Tab>
  </div>
</template>

<script lang="ts" setup>
type TabProps = "login" | "registration";

const headers = reactive<Array<TabProps>>(["login", "registration"]);
const activeTab = ref<TabProps>("registration");
</script>
