const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashingPassword = (password) => {
    try {
        const hash = bcrypt.hashSync(password, saltRounds);
        return hash;
    } catch (error) {
        throw error;
    }
}

const comparePassword = (password, hash) => {
    try {
        const isPasswordMatch = bcrypt.compareSync(password, hash);
        return isPasswordMatch;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    hashingPassword,
    comparePassword
}