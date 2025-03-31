<template>
  <div class="layout">
    <!-- Top Bar -->
    <TopBar />

    <div class="content">
      <!-- Side Bar -->
      <SideBar />

      <!-- Main Content -->
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TopBar from '../components/TopBar.vue';
import SideBar from '../components/SideBar.vue';
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
}
</style>