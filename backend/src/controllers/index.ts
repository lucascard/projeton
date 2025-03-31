import express from 'express';
import { User } from '../models';
class IndexController {
    public getIndex(req: express.Request, res: express.Response): void {
        res.send('Hello from the Index Controller!');
    }
}

const router = express.Router();

router.post('/users', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Criar o usuário
        await User.create({ username, email, password });

        // Buscar o registro recém-criado com base no email (ou outro campo único)
        const createdUser = await User.findOne({ where: { email } });

        res.status(201).json(createdUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

export default IndexController;