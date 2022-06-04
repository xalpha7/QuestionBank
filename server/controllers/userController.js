const db = require('../models');

// create main model
const User = db.users;


// adding a user

const addUser = async (req, res) => {
    let info = {
        userId: req.body.userId,
        email: req.body.email,
        password: req.body.password
    }

    const user = await User.create(info)
    res.status(200).send(user);
}

// get all users

const getAllUsers = async (req, res) => {
    let users = await User.findAll({});
    res.status(200).send(users);
}

/**
 * findAll({
 *      attributes: [
 *      'title',
 *      'price'
 *      ]
 * })
 */

// get a particular user

const getParticularUser = async (req, res) => {
    let userId = req.params.userId;
    let user = await User.findOne({
        where: {
            userId: userId
        }
    });

    res.status(200).send(user);
}



// update user

const updateUser = async (req, res) => {
    let userId = req.params.userId;
    let user = await User.update(req.body, {
        where: {
            userId: userId
        }
    });

    res.status(200).send(user);
}


// delete user by userId 
/**
 * make sure to mention the attribute where while deleting otherwise it will delete every data
 */

const deleteUser = async (req, res) => {
    let userId = req.params.userId;
    await User.destroy({ where: { userId: userId }});
    res.status(200).send('User is deleted!');
}


module.exports = {
    addUser,
    getAllUsers,
    getParticularUser,
    updateUser,
    deleteUser
}