import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

// Define os atributos do modelo User
interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
}

// Define os atributos opcionais para criação de um novo usuário
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Define o modelo User com os atributos e métodos
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        modelName: 'User',
    }
);

export { User };