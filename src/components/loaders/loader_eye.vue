<template>
  <div class="absolute min-w-full h-screen bg-black/60 top-0 flex justify-center text-center items-center z-50">
    <div class="eyes-7" />
  </div>
</template>

<style scoped>
.eyes-7 {
  display:flex;
  gap:10px;
}
.eyes-7:before,
.eyes-7:after {
  content:"";
  height:20px;
  aspect-ratio:1;
  border-radius:50%;
  background:
    linear-gradient(#222 0 0) top/100% 40% no-repeat,
    radial-gradient(farthest-side,#000 95%,#0000) 50%/8px 8px no-repeat
    #fff;
  animation:e7 1.5s infinite alternate ease-in;
}

@keyframes e7 {
  0%,
  70% {background-size:100% 40%,8px 8px}
  85% {background-size:100% 120%,8px 8px}
  100% {background-size:100% 40%,8px 8px}
}
</style>