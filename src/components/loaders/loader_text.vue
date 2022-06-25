<template>
    <div class="absolute min-w-full h-screen bg-black/50 top-0 flex justify-center text-center items-center">
        <div class="classic-4 text-xs xs:text-sm md:text-base lg:text-lg text-white"></div>
    </div>
</template>

<style scoped>
[class*=classic]:before {
  content:"Sabar Lip jangan emosi......";
}
.classic-4 {
  font-weight: bold;
  clip-path: inset(0 3ch 0 0);
  animation:c4 1s steps(4) infinite;
}
@keyframes c4 {to{clip-path: inset(0 -1ch 0 0)}}
</style>