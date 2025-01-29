import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'BASICSECRET';

export default {
    register(userData) {
        return User.create(userData);
    },
    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Invalid email or password!');
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Invalid email or password!');
        }

        const payload = {
            id: user.id,
            email: user.email,
        };
        // TODO: use async option
        const token = jwt.sign(payload, SECRET, { expiresIn: '2h' });
        
        return token
    }
};
