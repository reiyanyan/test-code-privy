<template>
  <div
    class="relative flex h-[344px] w-[640px] bg-[#22252E] items-center justify-center border-2 border-dashed border-white rounded-lg cursor-pointer"
    @dragover.prevent
    @drop="onDrop"
  >
    <input
      class="absolute w-full h-full opacity-0 cursor-pointer"
      type="file"
      name="image"
      @change="onChange"
    />
    <label v-if="!image" class="flex flex-col items-center gap-3.5">
      <Icon class="text-7xl text-primary">add_photo_alternate</Icon>
      <div class="flex flex-col gap-1 items-center">
        <p class="text-xl">Drag & Drop your Picture here</p>
        <p class="text-base">Or</p>
        <p class="text-lg text-primary">Browse file</p>
      </div>
    </label>
    <div v-else class="w-full h-full">
      <img :src="image" alt="" class="object-cover w-full h-full" />
    </div>
  </div>
</template>

<script lang="ts" setup>
type PropsType = {
  modelValue: string;
};

const props = withDefaults(defineProps<PropsType>(), {
  modelValue: "",
});

const emit = defineEmits(["update:modelValue"]);

const image = computed<string | unknown>({
  get() {
    return props.modelValue;
  },
  set(value) {
    return emit("update:modelValue", value);
  },
});

const onDrop = (e) => {
  console.log("onDrop ", typeof e);
  e.stopPropagation();
  e.preventDefault();
  var files = e.dataTransfer.files;
  createFile(files[0]);
};

const createFile = (file) => {
  if (!file.type.match("image.*")) {
    alert("Select an image");
    return;
  }
  var img = new Image();
  var reader = new FileReader();

  reader.onload = function (e) {
    image.value = e.target?.result;
  };
  reader.readAsDataURL(file);
};

const removeFile = (file) => {
  image.value = "";
};

const onChange = (e) => {
  console.log("onChange", typeof e);
  var files = e.target.files;
  createFile(files[0]);
};
</script>
