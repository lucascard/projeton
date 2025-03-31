import express from 'express';
import { setRoutes } from './routes/index';
import { connectToDatabase } from './config/database';
import { syncDatabase } from './models';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectToDatabase();
syncDatabase(); // Sincronizar o banco de dados

setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});