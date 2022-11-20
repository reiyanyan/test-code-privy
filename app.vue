<script setup lang="ts">
import "~/assets/tailwind.css";

const layout = ref<"auth" | "guest" | false>("auth");
</script>

<template>
  <main class="font-sans">
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
