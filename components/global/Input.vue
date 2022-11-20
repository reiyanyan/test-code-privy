<template>
  <div class="flex flex-col gap-2">
    <label class="text-sm font-normal">{{ label }}</label>
    <div class="relative">
      <input
        class="w-full rounded-md p-4 bg-transparent border border-secondary focus:border-0 focus:outline-none focus:ring-1 focus:ring-primary"
        :placeholder="placeholder ?? label"
        :type="!show && type == 'password' ? 'text' : type"
        :value="modelValue"
        @input="(event: Event) => $emit('update:modelValue', (event.target as HTMLInputElement)?.value)"
        v-bind="$attrs"
      />
      <div
        v-if="type == 'password'"
        class="absolute inset-y-0 right-0 mr-4 flex items-center leading-5 cursor-pointer text-second-btn"
        @click="show = !show"
      >
        <Icon v-if="show" class="text-xl">visibility</Icon>
        <Icon v-else class="text-xl">visibility_off</Icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
const show = ref<boolean>(true);

const emit = defineEmits(["update:modelValue"]);

const props = defineProps<{
  label: string;
  placeholder?: string;
  type?: string;
  modelValue: string;
}>();
</script>
