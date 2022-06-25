<script setup>
  import { watchEffect } from 'vue';
  import { authLogin } from '../stores'

  const store = authLogin()

  watchEffect(() => {
    console.log("token", store.token)
  })
</script>

<template>
  <section>
    <router-link to="/login">Login</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </section>
</template>