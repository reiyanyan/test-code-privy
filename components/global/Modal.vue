<template>
  <Transition name="fade">
    <div
      v-if="showing"
      class="flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 fixed inset-0 w-screen h-screen -mt-[12.4rem] -ml-[41rem] overflow-hidden"
      @click.self="outsideClick ? $emit('close') : () => {}"
    >
      <div
        class="flex flex-col relative max-h-screen w-max bg-primary-back backdrop-blur-2xl border border-white/20 shadow-lg rounded-lg gap-5 p-8"
        v-bind="$attrs"
      >
        <div
          class="flex flex-row justify-between text-xl font-medium font-roboto mt-0.5"
        >
          <p>{{ title }}</p>
          <Icon
            v-if="outsideClick"
            class="text-xl font-bold cursor-pointer"
            @click="$emit('close')"
          >
            close
          </Icon>
        </div>
        <div class="max-h-screen w-full">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
type Props = {
  title: string;
  showing: boolean;
  outsideClick: boolean;
  footer: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  title: "",
  showing: false,
  outsideClick: true,
  footer: false,
});

const emit = defineEmits(["close"]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
