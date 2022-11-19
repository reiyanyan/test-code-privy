import { title } from 'process';
<template>
  <div class="relative flex w-full flex-col gap-2 text-white" ref="wrapper">
    <p class="text-sm font-normal">{{ title }}</p>
    <button
      class="relative flex w-full flex-row justify-between items-center rounded-lg p-4 text-inherit"
      :class="{
        'border-none ring-2 ring-primary': isActive,
        'border border-secondary': !isActive,
      }"
      @click="isActive = !isActive"
    >
      <div class="flex flex-row gap-2 items-center">
        <p class="capitalize">
          {{ selected.title }}
        </p>
      </div>
      <Icon
        class="flex absolute inset-y-0 right-0 mr-4 transition-transform duration-300 text-3xl text-primary items-center"
        :class="{ 'rotate-180': isActive }"
      >
        arrow_drop_down
      </Icon>
    </button>
    <div
      v-if="isActive"
      class="absolute bottom-[-1.25rem] z-[60] flex h-max w-full translate-y-full flex-col items-start gap-y-5 rounded-lg bg-primary-back px-5 py-3 text-inherit outline outline-primary backdrop-blur transition-all duration-1000"
      @focusout="isActive = false"
    >
      <div class="w-full text-inherit">
        <div class="flex w-full flex-col gap-y-2">
          <div
            v-for="(item, index) in options"
            :key="index"
            class="flex flex-row gap-2 items-center"
            @click="handleSelected(item)"
          >
            <p
              class="capitalize transition-color w-full cursor-pointer rounded-md px-5 py-2 duration-200 hover:bg-secondary/40"
            >
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

export type OptionProps = {
  title: string;
  value: unknown;
};

type Props = {
  title: string;
  modelValue: OptionProps;
  options: Array<OptionProps>;
};

const isActive = ref<boolean>(false);
const wrapper = ref<HTMLDivElement>();

const selected = computed<OptionProps>({
  get(): OptionProps {
    return props.modelValue;
  },
  set(value) {
    return emit("update:modelValue", value);
  },
});

const props = withDefaults(defineProps<Props>(), {
  title: "",
  modelValue: () => ({
    title: "",
    value: "",
  }),
  options: () => [],
});

const emit = defineEmits(["update:modelValue"]);

const handleSelected = (item: OptionProps): void => {
  isActive.value = false;
  Object.assign(selected.value, item);
};

onMounted(() => {
  ["mousedown", "touchstart"].forEach((evtName: string) =>
    document.addEventListener(evtName, (e: Event) => {
      if (wrapper.value && !wrapper.value.contains(e.target as Node))
        isActive.value = false;
    })
  );
  if (selected.value.title == "") {
    Object.assign(selected.value, props.options[0]);
  }
});
</script>
