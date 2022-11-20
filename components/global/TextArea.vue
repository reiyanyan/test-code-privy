<template>
  <div class="flex flex-col gap-2">
    <label class="text-sm font-normal">{{ label }}</label>
    <div class="relative">
      <textarea
        class="w-full rounded-md p-4 bg-transparent border border-secondary"
        :rows="rows"
      ></textarea>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label: string;
  placeholder?: string;
  rows?: number;
}>();
</script>

<style lang="scss" scoped>
textarea {
  resize: none;
}
</style>
