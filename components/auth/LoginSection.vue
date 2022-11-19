<template>
  <div
    class="flex flex-col p-8 gap-8 border border-secondary rounded-lg font-sans"
  >
    <p class="text-lg font-semibold">Login Account</p>
    <div class="flex flex-col gap-6">
      <Input label="Phone Number"></Input>
      <Input label="Password" type="password"></Input>
    </div>
    <div class="flex flex-row gap-4">
      <Button variant="outlined-secondary">Reset</Button>
      <Button variant="primary">Login</Button>
    </div>
  </div>
</template>
