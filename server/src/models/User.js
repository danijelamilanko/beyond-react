import  mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    }
}, { timestamp: true });

schema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password, this.passwordHash)
};

export default mongoose.model('User', schema);