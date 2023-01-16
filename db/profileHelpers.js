const {User, Profile} = require('./index.js');

const handleAddUserInfo = async (req, res) => {
  let user = {
    uid: req.body.uid,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    DOB: req.body.dob
  }
  User.create(user)
  .then(data => {
    console.log('user created in db', data.dataValues);
    res.send(data.dataValues);
  })
  .catch (err => {
    res.status(400).send(err);
  })
}

const handleGetUserInfo = async (req, res) => {
  const uid = req.query.uid;
  User.findall({
    where: {uid: uid},
    attributes: ['id', 'firstName', 'lastName', 'DOB']
  })
  .then(data => {
    res.send({'uid': uid, 'results': data});
  })
  .catch(err => {
    res.status(500).send(err);
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
    userId: req.body.userid
  };
  Profile.create(profile)
  .then(data => {
    console.log('user profile created in db', data.dataValues);
    res.send(data.dataValues);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handleEditProfile = async (req, res) => {
  let medicalconditions = req.body.medicalconditions;
  let allergies = req.body.allergies;
  let bloodtype = req.body.bloodtype;
  let weight = req.body.weight;
  let height = req.body.height;
  let id = req.body.id;

  Profile.bulkCreate(
    [{id: id, medicalconditions: medicalconditions, allergies: allergies, bloodtype: bloodtype, weight: weight, height: height}],
    {updateOnDuplicate: ['medicalconditions', 'allergies', 'bloodtype', 'weight', 'height']}
  )
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

module.exports = {handleAddUserInfo,  handleGetUserInfo, handleGetProfile, handleAddProfile, handleEditProfile};