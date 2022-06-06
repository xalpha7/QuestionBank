const db = require('../models');
const bcrypt = require('bcrypt');
// create main model
const User = db.users;
const { v4: uuidv4 } = require('uuid');

// adding a user

const addContributor = async (req, res) => {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const userId = uuidv4();
    let info = {
        userId: userId,
        role: "contributor",
        email: req.body.email,
        password: encryptedPassword
    }

    const user = await User.create(info)
    res.status(200).send(user);
}


const addReviewer = async (req, res) => {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const userId = uuidv4();
    let info = {
        userId: userId,
        role: "Reviewer",
        email: req.body.email,
        password: encryptedPassword
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

const checkParticularUser = async (req, res) => {
    let email = req.params.email;
    let user = await User.findOne({
        where: {
            email: email
        }
    });

    if (user != null) {
        // if user exist then send true
        res.status(201).send(true);
    } else if (user === null) {
        // if user does not exist then false
        res.status(200).send(false);
    }

}
const getParticularUser = async (req, res) => {
    let email = req.params.email;
    let user = await User.findOne({
        where: {
            email: email
        }
    });
   
    

    if (user != null) {
        // if user exist then send true
        res.status(201).send(user.userId);
    } else if (user === null) {
        // if user does not exist then false
        res.status(200).send(false);
    }

}

const checkUserCreds = async (req, res) => { 
    let user = await User.findOne({
        where: {
            userId: req.body.userId
        }
    });
    const isValid = await bcrypt.compare(req.body.password, user.password);
    res.status(200).send(isValid);
    
    

}
const getUserCreds = async (req, res) => {
    let user = await User.findOne({
        where: {
            userId: req.params.userId
        }
    });

    const details = {
        userEmail: user.email,
        userRole: user.role
    }
    
    
    res.status(200).send(details);
    
    

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
    await User.destroy({ where: { userId: userId } });
    res.status(200).send('User is deleted!');
}


module.exports = {
    addContributor,
    addReviewer,
    getAllUsers,
    checkParticularUser,
    checkUserCreds,
    getParticularUser,
    getUserCreds,
    updateUser,
    deleteUser
}