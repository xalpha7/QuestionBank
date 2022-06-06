const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/addContributor', userController.addContributor );
router.post('/addReviewer', userController.addReviewer );
router.get('/checkuser/:email', userController.checkParticularUser);
router.get('/getuserId/:email', userController.getParticularUser);
router.post('/checkUserCreds', userController.checkUserCreds);
router.get('/getUserCreds/:userId', userController.getUserCreds);


module.exports = router;