const express = require('express');
const router = express.Router();
const {handleAddUserInfo, handleGetProfile, handleAddProfile, handleEditProfile} = require('../db/profileHelpers.js');
const {handleGetHealthScreenings, handlePostHealthScreenings, handlePostMedicalEntry, handlePostDentalEntry, handlePostVisionEntry, handlePostWomenWellnessEntry, handlePostImmunizationEntry, handlePostOtherEntry, handleEditMedicalEntry, handleEditDentalEntry, handleEditVisionEntry, handleEditWomenWellnessEntry, handleEditImmunizationEntry, handleEditOtherEntry, handleDeleteMedicalEntry, handleDeleteDentalEntry, handleDeleteVisionEntry, handleDeleteWomenWellnessEntry, handleDeleteImmunizationEntry, handleDeleteOtherEntry} = require('../db/HSHelpers.js');

// user's info
router.post('/', handleAddUserInfo)

router.get('/profile', handleGetProfile);

router.post('/profile', handleAddProfile);

router.post('/profile/edit', handleEditProfile);

// health screenings history
router.get('/healthscreenings', handleGetHealthScreenings);

router.post('/healthscreenings', handlePostHealthScreenings);

router.post('/healthscreenings/medical', handlePostMedicalEntry);

router.post('/healthscreenings/dental', handlePostDentalEntry);

router.post('/healthscreenings/vision', handlePostVisionEntry);

router.post('/healthscreenings/womenwellness', handlePostWomenWellnessEntry);

router.post('/healthscreenings/immunization', handlePostImmunizationEntry);

router.post('/healthscreenings/other', handlePostOtherEntry);

router.post('/healthscreenings/medical/edit', handleEditMedicalEntry);

router.post('/healthscreenings/dental/edit', handleEditDentalEntry);

router.post('/healthscreenings/vision/edit', handleEditVisionEntry);

router.post('/healthscreenings/womenwellness/edit', handleEditWomenWellnessEntry);

router.post('/healthscreenings/immunization/edit', handleEditImmunizationEntry);

router.post('/healthscreenings/other/edit', handleEditOtherEntry);

router.delete('/healthscreenings/medical/',  handleDeleteMedicalEntry);

router.delete('/healthscreenings/dental/',  handleDeleteDentalEntry);

router.delete('/healthscreenings/vision/',  handleDeleteVisionEntry);

router.delete('/healthscreenings/womenwellness/',  handleDeleteWomenWellnessEntry);

router.delete('/healthscreenings/immunization/',  handleDeleteImmunizationEntry);

router.delete('/healthscreenings/other/',  handleDeleteOtherEntry);

// care team
router.get('/careteam');

router.post('/careteam');

router.put('/careteam');

router.delete('/careteam');


module.exports = router;