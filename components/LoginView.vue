<script setup>
const { loggedIn, user, clear } = useUserSession()
</script>

<template>
  <span v-if="loggedIn">
    <p>Welcome {{ user.name }} {{ user.email }}!</p>
    <button @click="clear">Logout</button>
  </span>
  <span v-else>
    <a href="/auth/google/callback">Login with Google</a>
  </span>
</template>
