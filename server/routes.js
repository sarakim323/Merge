const express = require('express');
const router = express.Router();
const {handleAddUserInfo, handleGetProfile, handleAddProfile, handleEditProfile} = require('../db/profileHelpers.js');
const {handleGetHealthScreenings, handlePostHealthScreenings, handlePostMedicalEntry, handlePostDentalEntry, handlePostVisionEntry, handlePostWomenWellnessEntry, handlePostImmunizationEntry, handlePostOtherEntry} = require('../db/HSHelpers.js');

// user's info
router.post('/', handleAddUserInfo)

router.get('/profile', handleGetProfile);

router.post('/profile', handleAddProfile);

router.post('/profile/update', handleEditProfile);

// health screenings history
router.get('/healthscreenings', handleGetHealthScreenings);

router.post('/healthscreenings', handlePostHealthScreenings);

router.post('/healthscreenings/medical', handlePostMedicalEntry);

router.post('/healthscreenings/dental', handlePostDentalEntry);

router.post('/healthscreenings/vision', handlePostVisionEntry);

router.post('/healthscreenings/womenwellness', handlePostWomenWellnessEntry);

router.post('/healthscreenings/immunization', handlePostImmunizationEntry);

router.post('/healthscreenings/other', handlePostOtherEntry);

router.put('/healthscreenings');

router.delete('/healthscreenings');

// care team
router.get('/careteam');

router.post('/careteam');

router.put('/careteam');

router.delete('/careteam');


module.exports = router;