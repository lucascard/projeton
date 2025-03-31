import express from 'express';
import cors from 'cors'; // Importe o middleware CORS
import { setRoutes } from './routes/index';
import { connectToDatabase } from './config/database';
import { sequelize } from './config/database'; // Importa a instância do Sequelize

const app = express();
const PORT = process.env.PORT || 3000;

// Configure o middleware CORS
app.use(cors({
    origin: 'http://localhost:5173', // Permita apenas o frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true, // Permita envio de cookies, se necessário
}));

app.use(express.json());

connectToDatabase();

// Função para sincronizar o banco de dados
const syncDatabase = async () => {
    try {
        await sequelize.sync();
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Error synchronizing the database:', error);
    }
};

syncDatabase(); // Sincronizar o banco de dados

setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});