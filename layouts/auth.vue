<template>
  <div class="flex flex-row text-white w-screen min-h-screen h-full">
    <div
      class="flex flex-col gap-y-16 w-full max-w-[560px] bg-prim-back p-24 font-raleway"
    >
      <div class="flex flex-row gap-x-3 items-center">
        <img class="w-[59px] h-[38px]" src="~/assets/img/ic_logo.svg" alt="" />
        <p class="text-primary text-3xl font-bold">PRISIGN</p>
      </div>
      <div class="flex flex-col pl-9 gap-y-4">
        <p class="text-3xl font-bold">Welcome to Prisign</p>
        <p class="font-roboto font-light">
          Is a personal data platform, you can update your information about
          yourself, customize your profile and change a lot of things
        </p>
      </div>
    </div>
    <div class="w-full bg-second-back">
      <img
        class="w-full h-[293px] left-0 top-0 z-0"
        src="~/assets/img/dashboard_bg.png"
        alt=""
      />
      <div class="-mt-24 px-24">
        <div
          class="py-16 px-8 z-40 bg-primary-back backdrop-blur-2xl rounded-lg border border-white/20"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
