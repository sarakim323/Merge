const {CareTeam, Provider} = require('./index.js');

const handleGetCareTeam = async (req, res) => {
  const userId = req.params.userId;
  CareTeam.findAll({
    where: {userId: userId},
    attributes: ['id', 'userId'],
    include: [{
      model: Provider
    }]
  })
  .then(data => {
    res.send({'userId': userId, 'results': data});
  })
  .catch (err => {
    res.status(500).send(err);
  })
};

const handlePostCareTeam = async (req, res) => {
  let careteam = {
    userId: req.body.userId
  };

  CareTeam.create(careteam)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handleAddProvider = async (req, res) => {
  let entry = {
    providername: req.body.providername,
    specialty: req.body.specialty,
    clinicname: req.body.clinicname,
    phonenumber: req.body.phonenumber,
    careteamId: req.body.careteamId
  };

  Provider.create(entry)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handleDeleteProvider = async (req, res) => {
  let id = req.params.id;
  Provider.destroy({
    where: {
      id: id
    }
  })
  .then(data => {
    res.sendStatus(200);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handleEditProvider = async (req, res) => {
  let providername = req.body.providername;
  let specialty = req.body.specialty;
  let clinicname = req.body.clinicname;
  let phonenumber = req.body.phonenumber;
  let id = req.body.id;

  Provider.bulkCreate(
    [{id: id, providername: providername, specialty: specialty, clinicname: clinicname, phonenumber: phonenumber}],
    {updateOnDuplicate: ['providername', 'specialty', 'clinicname', 'phonenumber']}
  )
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
}

module.exports = {handleGetCareTeam, handlePostCareTeam, handleAddProvider, handleEditProvider, handleDeleteProvider};