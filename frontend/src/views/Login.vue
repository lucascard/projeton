<template>
  <div class="login-container">
    <div class="login-card">
      <h1 class="login-title">Bem-vindo</h1>
      <p class="login-subtitle">Faça login para continuar</p>
      <form @submit.prevent="handleLogin">
        <input
          type="email"
          v-model="email"
          name="username"
          autocomplete="username"
          placeholder="Email"
          class="login-input"
          required
        />
        <input
          type="password"
          v-model="password"
          name="password"
          autocomplete="current-password"
          placeholder="Senha"
          class="login-input"
          required
        />
        <button type="submit" class="login-button">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const authStore = useAuthStore();
    const router = useRouter();

    const handleLogin = async () => {
      try {
        await authStore.login(email.value, password.value); // Chama o método do store
        router.push('/'); // Redireciona para a página inicial
      } catch (error) {
        alert(error.message);
      }
    };

    return { email, password, handleLogin };
  },
});
</script>

<style scoped>
/* Estilo geral */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212; /* Fundo escuro */
  color: #ffffff; /* Texto branco */
}

/* Cartão de login */
.login-card {
  background-color: #1e1e1e; /* Fundo do cartão */
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

/* Título e subtítulo */
.login-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.login-subtitle {
  font-size: 14px;
  color: #b3b3b3;
  margin-bottom: 30px;
}

/* Inputs */
.login-input {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: none;
  border-radius: 8px;
  background-color: #2c2c2c;
  color: #ffffff;
  font-size: 16px;
}

.login-input::placeholder {
  color: #b3b3b3;
}

.login-input:focus {
  outline: 2px solid #007bff;
}

/* Botão */
.login-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}

.login-button:active {
  background-color: #003f8a;
}
</style>