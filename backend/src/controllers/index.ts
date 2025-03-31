import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models';
import { ValidationError } from 'sequelize';

class IndexController {
    public getIndex(req: express.Request, res: express.Response): void {
        res.send('Hello from the Index Controller!');
    }

    public async createUser(req: express.Request, res: express.Response): Promise<void> {
        try {
            const { username, email, password } = req.body;

            // Hash da senha antes de salvar no banco de dados
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({ username, email, password: hashedPassword });

            res.status(201).json(newUser);
        } catch (error) {
            if (error instanceof ValidationError) {
                const messages = error.errors.map((err) => err.message);
                res.status(400).json({ error: messages });
                return;
            }

            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Failed to create user' });
        }
    }
}

export default IndexController;