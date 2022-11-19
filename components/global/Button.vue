<template>
  <div
    class="flex items-center rounded-md w-max capitalize cursor-pointer"
    :class="{
      'py-3 px-6 bg-primary text-white': variant == 'primary',
      'py-3 px-8 bg-transparent text-second-btn border border-second-btn':
        variant == 'outlined-secondary',
    }"
    v-bind="$attrs"
  >
    <p class="text-base">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts" setup>
type VariantProps =
  | "primary"
  | "secondary"
  | "outlined-primary"
  | "outlined-secondary";

type Props = {
  variant: VariantProps;
};

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});
</script>
