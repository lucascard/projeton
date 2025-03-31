import { Router } from 'express';
import IndexController from '../controllers';
import { User } from '../models';

const router = Router();
const indexController = new IndexController();

router.get('/', indexController.getIndex.bind(indexController));

// Rota para listar todos os usuários
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Rota para criar um novo usuário
router.post('/users', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await User.create({ username, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

export function setRoutes(app: Router) {
    app.use('/', router);
}

export default router;