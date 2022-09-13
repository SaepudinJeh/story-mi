<template>
  <scroll-parallax
    :speed="2"
    direction="y"
  >
    <section class="w-full h-screen flex items-center flex-col justify-center">
      <div class="font-comfortaa text-center">
        <h1>Cuma manusia yang hobi makan</h1>
        <h1>dan punya <b>Kewajiban</b> untuk selalu <b>Senang</b></h1>
      </div>

      <div class="mt-44 text-sm flex flex-col items-center gap-y-3">
        <span>
          Terus scroll :)
        </span>
        <span
          class="iconify text-lg"
          data-icon="bi:arrow-down-circle-fill"
        />
      </div>
    </section>
  </scroll-parallax>
</template>