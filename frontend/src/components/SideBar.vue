<template>
  <aside :class="['side-bar', { minimized }]">
    <div class="toggle-button" @click="toggleSidebar">
      <span v-if="!minimized">←</span>
      <span v-else>→</span>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/">
            <i class="icon-home"></i>
            <span v-if="!minimized">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <i class="icon-info"></i>
            <span v-if="!minimized">Sobre</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Estado para controlar se a side bar está minimizada
const minimized = ref(false);

// Função para alternar o estado da side bar
const toggleSidebar = () => {
  minimized.value = !minimized.value;
};
</script>

<style scoped>
.side-bar {
  width: 200px;
  background-color: #1e1e1e;
  color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
}

.side-bar.minimized {
  width: 60px;
}

.toggle-button {
  background-color: #007bff;
  color: white;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
}

.side-bar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.side-bar li {
  margin: 20px 0;
}

.side-bar a {
  text-decoration: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.side-bar a:hover {
  background-color: #007bff;
}

.icon-home,
.icon-info {
  margin-right: 10px;
}

.side-bar.minimized .icon-home,
.side-bar.minimized .icon-info {
  margin-right: 0;
}

.side-bar.minimized span {
  display: none;
}
</style>