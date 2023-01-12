const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('mvp', 'postgres', 'rayra0501', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
})

sequelize.authenticate()
  .then(() => console.log('connection has been established successfuly'))
  .catch((err) => console.log('unable to connect to the database: ', err));

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uid: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  firstName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  DOB: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

const Profile = sequelize.define('profile', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  medicalconditions: {
    type: DataTypes.TEXT
  },
  allergies: {
    type: DataTypes.TEXT
  },
  bloodtype: {
    type: DataTypes.TEXT
  },
  weight: {
    type: DataTypes.TEXT
  },
  height: {
    type: DataTypes.TEXT
  }
});

User.hasOne(Profile);
Profile.belongsTo(User);

const HealthScreenings = sequelize.define('healthscreenings', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
})

User.hasOne(HealthScreenings);
HealthScreenings.belongsTo(User);

const MedicalEntry = sequelize.define('medical', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  provider: {
    type: DataTypes.TEXT
  },
  notes: {
    type: DataTypes.TEXT
  }
})

HealthScreenings.hasMany(MedicalEntry);
MedicalEntry.belongsTo(HealthScreenings);

const DentalEntry = sequelize.define('dental', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  provider: {
    type: DataTypes.TEXT
  },
  notes: {
    type: DataTypes.TEXT
  }
})

HealthScreenings.hasMany(DentalEntry);
DentalEntry.belongsTo(HealthScreenings);

const VisionEntry = sequelize.define('vision', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  provider: {
    type: DataTypes.TEXT
  },
  notes: {
    type: DataTypes.TEXT
  }
})

HealthScreenings.hasMany(VisionEntry);
VisionEntry.belongsTo(HealthScreenings);

const WomenWellnessEntry = sequelize.define('womenwellness', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  provider: {
    type: DataTypes.TEXT
  },
  notes: {
    type: DataTypes.TEXT
  }
})

HealthScreenings.hasMany(WomenWellnessEntry);
WomenWellnessEntry.belongsTo(HealthScreenings);

const ImmunizationEntry = sequelize.define('immunization', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  provider: {
    type: DataTypes.TEXT
  },
  notes: {
    type: DataTypes.TEXT
  }
})

HealthScreenings.hasMany(ImmunizationEntry);
ImmunizationEntry.belongsTo(HealthScreenings);

const OtherEntry = sequelize.define('other', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  provider: {
    type: DataTypes.TEXT
  },
  notes: {
    type: DataTypes.TEXT
  }
})

HealthScreenings.hasMany(OtherEntry);
OtherEntry.belongsTo(HealthScreenings);

const CareTeam = sequelize.define('careteam', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
})

User.hasOne(CareTeam);
CareTeam.belongsTo(User);

const Provider = sequelize.define('provider', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  providername: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  specialty: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  clinicname: {
    type: DataTypes.TEXT
  },
  phonenumber: {
    type: DataTypes.TEXT
  }
})

CareTeam.hasMany(Provider);
Provider.belongsTo(CareTeam);

sequelize.sync();

module.exports = {User, Profile, HealthScreenings, MedicalEntry, DentalEntry, VisionEntry, WomenWellnessEntry, ImmunizationEntry, OtherEntry, CareTeam, Provider};