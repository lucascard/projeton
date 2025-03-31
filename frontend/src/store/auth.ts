import { defineStore } from 'pinia';
import { login as loginService } from '../services/authService';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false,
        user: null as { id: number; username: string } | null,
    }),
    actions: {
        async login(email: string, password: string) {
            try {
                const data = await loginService(email, password);
                const { token, username, id } = data;

                // Salva o token no localStorage
                localStorage.setItem('token', token);

                // Atualiza o estado global
                this.isLoggedIn = true;
                this.user = { id, username };
            } catch (error) {
                throw new Error(error.message || 'Erro ao fazer login');
            }
        },
        logout() {
            this.isLoggedIn = false;
            this.user = null;
            localStorage.removeItem('token');
        },
    },
});