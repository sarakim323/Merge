const express = require('express');
const router = express.Router();
const {handleAddUserInfo, handleGetProfile, handleAddProfile, handleEditProfile} = require('../db/profileHelpers.js');

// user's info
router.post('/', handleAddUserInfo)

// health profile
router.get('/profile', handleGetProfile);

router.post('/profile', handleAddProfile);

router.post('/profile/update', handleEditProfile);

// health screenings history
router.get('/healthscreenings');

router.post('/healthscreenings');

router.put('/healthscreenings');

router.delete('/healthscreenings');

// care team
router.get('/careteam');

router.post('/careteam');

router.put('/careteam');

router.delete('/careteam');


module.exports = router;