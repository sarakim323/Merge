const express = require('express');
const path = require('path');
const cors = require('cors');
const HSRoutes = require('./HS-routes.js');

const PORT = process.env.PORT || 3001;

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/healthscreenings', HSRoutes);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));