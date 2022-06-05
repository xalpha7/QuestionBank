const db = require('../models');
const bcrypt = require('bcrypt');

// create main model
const Contributor = db.contributor;
const { v4: uuidv4 } = require('uuid');


const addQuestionSet = async (req, res) => {
    const { userId, questionSet } = req.body;
    
    let info = {
        userId: userId,
        questionSet: questionSet
    }

    const contributor = await Contributor.create(info)
    res.status(200).send(contributor);
}


module.exports = {
    addQuestionSet
}
