<script setup>
    import { useRouter } from 'vue-router';
    import { googleLogout } from 'vue3-google-login';
    const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem('access_token')
        googleLogout()
        router.go(0)
    }
</script>

<template>
  <router-link
    to="/"
    @click="handleLogout"
  >
    <div class="bg-white flex items-center justify-center h-10 w-10 rounded-full shadow-md text-yellow-800">
      <span
        class="iconify"
        data-icon="mdi:emoticon-poop"
      />
    </div>
  </router-link>
</template>