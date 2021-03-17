const db = require('../dataBase/MySQL').getInit();
require('../dataBase/models/Cars');
const User = db.getModel('User');

module.exports = {
    findAllUsers: () => User.findAll(),

    createUser: (userObject) => User.create(userObject),

    findUserById: (userId) => User.findById(userId),

    deleteUserById: (userId) => User.findByIdAndRemove(userId)
};
