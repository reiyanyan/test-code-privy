<template>
  <div class="flex flex-col gap-y-16">
    <div class="flex flex-row border-b gap-x-6 border-secondary">
      <p
        v-for="(item, index) in headers"
        :key="index"
        class="px-4 py-3 capitalize cursor-pointer"
        :class="{ 'border-b-4 border-primary': item == active }"
        @click="active = item"
      >
        {{ item }}
      </p>
    </div>
    <slot :name="active"></slot>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  headers: Array<string>;
  modelValue: string;
};

const active = computed<string>({
  get() {
    return props.modelValue;
  },
  set(value) {
    return emit("update:modelValue", value);
  },
});

const props = withDefaults(defineProps<Props>(), {
  headers: () => [],
  modelValue: "",
});

const emit = defineEmits(["update:modelValue"]);

onMounted(() => {
  if (active.value == "") active.value = props.headers[0];
});
</script>
