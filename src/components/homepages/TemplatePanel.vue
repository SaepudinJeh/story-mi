<template>
  <div class="w-full h-screen relative mb-44">
    <div class="absolute top-20 w-full">
      <div class="mx-auto w-11/12 md:w-1/2">
        <slot name="image" />

        <slot name="title" />

        <slot name="desc" />
      </div>
    </div>
  </div>
</template>