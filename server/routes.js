const express = require('express');
const router = express.Router();
const {handleAddUserInfo, handleGetUserInfo, handleGetProfile, handleAddProfile, handleEditProfile} = require('../db/profileHelpers.js');
const {handleGetHealthScreenings, handlePostHealthScreenings, handlePostMedicalEntry, handlePostDentalEntry, handlePostVisionEntry, handlePostWomenWellnessEntry, handlePostImmunizationEntry, handlePostOtherEntry, handleEditMedicalEntry, handleEditDentalEntry, handleEditVisionEntry, handleEditWomenWellnessEntry, handleEditImmunizationEntry, handleEditOtherEntry, handleDeleteMedicalEntry, handleDeleteDentalEntry, handleDeleteVisionEntry, handleDeleteWomenWellnessEntry, handleDeleteImmunizationEntry, handleDeleteOtherEntry} = require('../db/HSHelpers.js');
const {handleGetCareTeam, handlePostCareTeam, handleAddProvider, handleEditProvider, handleDeleteProvider} = require('../db/careTeamHelpers.js');

// user's info
router.post('/', handleAddUserInfo);

router.get('/:uid', handleGetUserInfo);

router.get('/profile/:uid', handleGetProfile);

router.post('/profile', handleAddProfile);

router.post('/profile/edit', handleEditProfile);

// health screenings history
router.get('/healthscreenings/:userId', handleGetHealthScreenings);

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

router.delete('/healthscreenings/medical/:id',  handleDeleteMedicalEntry);

router.delete('/healthscreenings/dental/:id',  handleDeleteDentalEntry);

router.delete('/healthscreenings/vision/:id',  handleDeleteVisionEntry);

router.delete('/healthscreenings/womenwellness/:id',  handleDeleteWomenWellnessEntry);

router.delete('/healthscreenings/immunization/:id',  handleDeleteImmunizationEntry);

router.delete('/healthscreenings/other/:id',  handleDeleteOtherEntry);

// care team
router.get('/careteam/:userId', handleGetCareTeam);

router.post('/careteam', handlePostCareTeam);

router.post('/careteam/provider', handleAddProvider);

router.post('/careteam/provider/edit', handleEditProvider);

router.delete('/careteam/provider/:id', handleDeleteProvider);

module.exports = router;