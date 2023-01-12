const {User, Profile} = require('./index.js');
const {auth} = require('../firebase.js');

const handleAddUserInfo = async (req, res) => {
  console.log('req', req.body)
  let user = {
    uid: req.body.uid,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    DOB: req.body.dob
  }
  User.create(user)
  .then(data => {
    res.send(data);
  })
  .catch (err => {
    res.status(400).send(err);
  })
}

const handleGetProfile = async (req, res) => {
  const uid = req.query.uid;
  User.findAll({
    where: {uid: uid},
    attributes: ['id', 'firstName', 'lastName', 'DOB'],
    include: [{
      model: Profile,
      attributes: ['medicalconditions', 'allergies', 'bloodtype', 'weight', 'height']
    }]
  })
  .then(data => {
    res.send({'uid': uid, 'results': data});
  })
  .catch (err => {
    res.status(500).send(err);
  })
};

const handleAddProfile = async (req, res) => {
  let profile = {
    medicalconditions: req.body.medicalconditions,
    allergies: req.body.allergies,
    bloodtype: req.body.bloodtype,
    weight: req.body.weight,
    height: req.body.height,
    userId: req.body.userId
  };

  Profile.create(profile)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handleEditProfile = async (req, res) => {
  let medicalconditions = req.query.medicalconditions;
  let allergies = req.query.allergies;
  let bloodtype = req.query.bloodtype;
  let weight = req.query.weight;
  let height = req.query.height;
  let id = req.query.id;

  Profile.bulkCreate(
    [{id: id, medicalconditions: medicalconditions, allergies: allergies, bloodtype: bloodtype, weight: weight, height: height}],
    {updateOnDuplicate: ['medicalconditions', 'allergies', 'bloodtype', 'weight', 'height']}
  )
  .then(data => {
    console.log('it went well');
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

module.exports = {handleAddUserInfo, handleGetProfile, handleAddProfile, handleEditProfile};