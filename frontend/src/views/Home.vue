<template>
  <div class="home">
    <h1>Welcome to My Vue 3 Project</h1>
    <p>This is the home page of the application.</p>
    <router-link to="/about">Go to About Page</router-link>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>