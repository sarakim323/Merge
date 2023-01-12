const express = require('express');
const router = express.Router();

// get user's info
router.get('/:user_id');

// post user's info
router.post('/:user_id');

// update user's info
router.put('/:user_id');

// get health profile
router.get('/:user_id/profile');

// post health profile
router.post('/:user_id/profile');

// update health profile
router.put('/:user_id/profile');

// get health screenings history (all)
router.get('/:user_id/healthscreenings');

// post health screening history (1)
router.post('/:user_id/healthscreenings');

// update health screenings history (1)
router.put('/:user_id/healthscreenings');

// delete health screening history (1)
router.delete('/:user_id/healthscreenings');

// get care team (all)
router.get('/:user_id/careteam');

// post provider (1)
router.post('/:user_id/careteam');

// update provider (1)
router.put('/:user_id/careteam');

// delete provider (1)
router.delete('/:user_id/careteam');

module.exports = router;