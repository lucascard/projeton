import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
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

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Log para verificar os dados recebidos
    console.log('Dados recebidos no login:', { email, password });

    try {
        // Verifica se o usuário existe no banco de dados pelo email
        const user = await User.findOne({ where: { email } });

        // Log para verificar se o usuário foi encontrado
        console.log('Usuário encontrado no banco de dados:', user);

        if (!user) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        // Acesse os atributos diretamente de `dataValues`
        const { id, email: userEmail, password: hashedPassword } = user.dataValues;

        // Log para verificar o hash armazenado no banco de dados
        console.log('Hash armazenado no banco de dados:', hashedPassword);

        // Verifica se a senha fornecida e o hash armazenado são válidos
        if (!password || !hashedPassword) {
            return res.status(400).json({ error: 'Dados inválidos' });
        }

        // Compara a senha fornecida com a senha armazenada no banco de dados
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        // Gera um token JWT
        const token = jwt.sign(
            { id, email: userEmail },
            'secreta-chave', // Substitua por uma chave secreta mais segura
            { expiresIn: '1h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Rota para criar um novo usuário
router.post('/users', indexController.createUser.bind(indexController));

// Rota para deletar um usuário
router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
});

export function setRoutes(app: Router) {
    app.use('/', router);
}

export default router;