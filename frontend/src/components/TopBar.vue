<template>
  <header class="top-bar">
    <div class="user-info">
      Usuário: {{ username }}
    </div>
    <button class="logout-button" @click="handleLogout">Logout</button>
  </header>
</template>

<script lang="ts" setup>
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';

// Acesse o estado global do Pinia
const authStore = useAuthStore();
const router = useRouter();

// Nome do usuário
const username = authStore.user?.username || 'Usuário';

// Função de logout
const handleLogout = () => {
  authStore.logout();
  localStorage.removeItem('token'); // Remove o token do localStorage
  router.push('/login'); // Redireciona para a página de login
};
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  height: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-info {
  font-size: 16px;
}

.logout-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #e60000;
}
</style>