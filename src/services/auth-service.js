import User from "../models/User.js";

export default {
    register(userData) {
        return User.create(userData);
    }
};
