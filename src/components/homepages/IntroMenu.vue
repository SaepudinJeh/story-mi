<template>
  <scroll-parallax
    :speed="2"
    direction="y"
  >
    <section class="w-full h-screen flex items-center flex-col justify-center">
      <div class="font-comfortaa text-center">
        <h1>Cuma manusia yang hobi makan</h1>
        <h1>dan mempunyai hak <b>ISTIMEWA</b> untuk menyukai segala hal</h1>
      </div>

      <div class="mt-44 text-sm flex flex-col items-center gap-y-3">
        <div>
          <p>Terus scroll ya</p>
        </div>
        <iconify-icon
          class="iconify md:text-3xl text-2xl"
          icon="line-md:emoji-smile-twotone"
        />
      </div>
    </section>
  </scroll-parallax>
</template>