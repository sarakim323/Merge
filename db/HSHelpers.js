const {User, HealthScreenings, MedicalEntry, DentalEntry, VisionEntry, WomenWellnessEntry, ImmunizationEntry, OtherEntry} = require('./index.js');

const handleGetHealthScreenings = async (req, res) => {
  const userId = req.query.userId;
  HealthScreenings.findAll({
    where: {userId: userId},
    attributes: ['id', 'userId'],
    include: [{
      model: MedicalEntry
    }, {
      model: DentalEntry
    }, {
      model: VisionEntry
    }, {
      model: WomenWellnessEntry
    }, {
      model: ImmunizationEntry
    }, {
      model: OtherEntry
    }]
  })
  .then(data => {
    res.send({'userId': userId, 'results': data});
  })
  .catch (err => {
    res.status(500).send(err);
  })
};

const handlePostHealthScreenings = async (req, res) => {
  let healthScreenings = {
    userId: req.body.userId
  };

  HealthScreenings.create(healthScreenings)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handlePostMedicalEntry = async (req, res) => {
  let entry = {
    date: req.body.date,
    name: req.body.name,
    provider: req.body.provider,
    notes: req.body.notes,
    healthscreeningId: req.body.healthscreeningId
  };

  MedicalEntry.create(entry)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handlePostDentalEntry = async (req, res) => {
  let entry = {
    date: req.body.date,
    name: req.body.name,
    provider: req.body.provider,
    notes: req.body.notes,
    healthscreeningId: req.body.healthscreeningId
  };

  DentalEntry.create(entry)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handlePostVisionEntry = async (req, res) => {
  let entry = {
    date: req.body.date,
    name: req.body.name,
    provider: req.body.provider,
    notes: req.body.notes,
    healthscreeningId: req.body.healthscreeningId
  };

  VisionEntry.create(entry)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handlePostWomenWellnessEntry = async (req, res) => {
  let entry = {
    date: req.body.date,
    name: req.body.name,
    provider: req.body.provider,
    notes: req.body.notes,
    healthscreeningId: req.body.healthscreeningId
  };

  WomenWellnessEntry.create(entry)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handlePostImmunizationEntry = async (req, res) => {
  let entry = {
    date: req.body.date,
    name: req.body.name,
    provider: req.body.provider,
    notes: req.body.notes,
    healthscreeningId: req.body.healthscreeningId
  };

  ImmunizationEntry.create(entry)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handlePostOtherEntry = async (req, res) => {
  let entry = {
    date: req.body.date,
    name: req.body.name,
    provider: req.body.provider,
    notes: req.body.notes,
    healthscreeningId: req.body.healthscreeningId
  };

  OtherEntry.create(entry)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handleEditMedicalEntry = async (req, res) => {
  let date = req.body.date;
  let name = req.body.name;
  let provider = req.body.provider;
  let notes = req.body.notes;
  let id = req.body.id;

  MedicalEntry.bulkCreate(
    [{id: id, date: date, name: name, provider: provider, notes: notes}],
    {updateOnDuplicate: ['date', 'name', 'provider', 'notes']}
  )
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handleEditDentalEntry = async (req, res) => {
  let date = req.body.date;
  let name = req.body.name;
  let provider = req.body.provider;
  let notes = req.body.notes;
  let id = req.body.id;

  DentalEntry.bulkCreate(
    [{id: id, date: date, name: name, provider: provider, notes: notes}],
    {updateOnDuplicate: ['date', 'name', 'provider', 'notes']}
  )
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handleEditVisionEntry = async (req, res) => {
  let date = req.body.date;
  let name = req.body.name;
  let provider = req.body.provider;
  let notes = req.body.notes;
  let id = req.body.id;

  VisionEntry.bulkCreate(
    [{id: id, date: date, name: name, provider: provider, notes: notes}],
    {updateOnDuplicate: ['date', 'name', 'provider', 'notes']}
  )
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handleEditWomenWellnessEntry = async (req, res) => {
  let date = req.body.date;
  let name = req.body.name;
  let provider = req.body.provider;
  let notes = req.body.notes;
  let id = req.body.id;

  WomenWellnessEntry.bulkCreate(
    [{id: id, date: date, name: name, provider: provider, notes: notes}],
    {updateOnDuplicate: ['date', 'name', 'provider', 'notes']}
  )
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handleEditImmunizationEntry = async (req, res) => {
  let date = req.body.date;
  let name = req.body.name;
  let provider = req.body.provider;
  let notes = req.body.notes;
  let id = req.body.id;

  ImmunizationEntry.bulkCreate(
    [{id: id, date: date, name: name, provider: provider, notes: notes}],
    {updateOnDuplicate: ['date', 'name', 'provider', 'notes']}
  )
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handleEditOtherEntry = async (req, res) => {
  let date = req.body.date;
  let name = req.body.name;
  let provider = req.body.provider;
  let notes = req.body.notes;
  let id = req.body.id;

  OtherEntry.bulkCreate(
    [{id: id, date: date, name: name, provider: provider, notes: notes}],
    {updateOnDuplicate: ['date', 'name', 'provider', 'notes']}
  )
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  })
};

const handleDeleteMedicalEntry = async (req, res) => {
  let id = req.query.id;
  MedicalEntry.destroy({
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

const handleDeleteDentalEntry = async (req, res) => {
  let id = req.query.id;
  DentalEntry.destroy({
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

const handleDeleteVisionEntry = async (req, res) => {
  let id = req.query.id;
  VisionEntry.destroy({
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

const handleDeleteWomenWellnessEntry = async (req, res) => {
  let id = req.query.id;
  WomenWellnessEntry.destroy({
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

const handleDeleteImmunizationEntry = async (req, res) => {
  let id = req.query.id;
  ImmunizationEntry.destroy({
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

const handleDeleteOtherEntry = async (req, res) => {
  let id = req.query.id;
  OtherEntry.destroy({
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

module.exports = {handleGetHealthScreenings, handlePostHealthScreenings, handlePostMedicalEntry, handlePostDentalEntry, handlePostVisionEntry, handlePostWomenWellnessEntry, handlePostImmunizationEntry, handlePostOtherEntry, handleEditMedicalEntry, handleEditDentalEntry, handleEditVisionEntry, handleEditWomenWellnessEntry, handleEditImmunizationEntry, handleEditOtherEntry,  handleDeleteMedicalEntry, handleDeleteDentalEntry, handleDeleteVisionEntry, handleDeleteWomenWellnessEntry, handleDeleteImmunizationEntry, handleDeleteOtherEntry};