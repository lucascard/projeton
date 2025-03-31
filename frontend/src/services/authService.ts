import axios from 'axios';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      email,
      password,
    });
    return response.data; // Retorna os dados do backend (token, username, etc.)
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw new Error('Email ou senha inválidos');
  }
};