const express = require("express");
const router = express.Router();
const ContributorController = require('../controllers/ContributorController');

router.get('/', (req, res) => res.send("contributor"))
router.post('/addQuestionSet', ContributorController.addQuestionSet );



module.exports = router;