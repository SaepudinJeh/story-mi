<template>
  <div class="py-44 flex justify-center">
    <div class="text-center flex justify-center items-center flex-col">
      <div class="time-1" />
      <p class="block pt-3 text-sm text-center mx-auto">
        ditunggu ya ...
      </p>
    </div>
  </div>
</template>

<style scoped>
.time-1 {
  width: 60px;
  height: 60px;
  border:4px solid;
  border-radius: 50%;
  display: flex;
  background: 
    radial-gradient(circle 5px, currentColor 95%,#0000),
    linear-gradient(currentColor 50%,#0000 0) center/4px 60% no-repeat;
  animation: t1 2s infinite linear;
}
.time-1:before {
  content: "";
  flex:1;
  background:linear-gradient(currentColor 50%,#0000 0) center/4px 80% no-repeat;
  animation: inherit;
}

@keyframes t1 {
  100% {transform: rotate(1turn)}
}

</style>