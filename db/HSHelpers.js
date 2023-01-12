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

module.exports = {handleGetHealthScreenings, handlePostHealthScreenings, handlePostMedicalEntry, handlePostDentalEntry, handlePostVisionEntry, handlePostWomenWellnessEntry, handlePostImmunizationEntry, handlePostOtherEntry};