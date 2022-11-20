<template>
  <div
    class="flex flex-col p-8 gap-8 border border-secondary rounded-lg font-sans"
  >
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-col">
        <p class="text-lg font-semibold">Gallery Information</p>
        <p class="font-light text-sm text-[#8E8EA3]">
          Information about your Gallery
        </p>
      </div>
      <Icon class="text-primary cursor-pointer" @click="isShowing = true">
        add
      </Icon>
    </div>
    <div class="grid grid-cols-3 gap-8">
      <img
        v-for="item in ['150x700', '700x150', '150']"
        :key="item"
        :src="`https://via.placeholder.com/${item}`"
        alt=""
      />
    </div>
    <Modal
      title="Upload Picture"
      :showing="isShowing"
      :outside-click="true"
      @close="isShowing = false"
    >
      <div class="flex flex-col gap-5">
        <DragSelectImage v-model="image"></DragSelectImage>
        <div class="flex flex-row justify-between">
          <p>Maximum File Size : 5 Mb</p>
          <p>PNG, JPG or GIF</p>
        </div>
        <Button class="w-full" :variant="image ? 'primary' : 'outlined-primary'"
          >UPLOAD</Button
        >
      </div>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
const isShowing = ref<boolean>(true);
const image = ref();
</script>
