const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes.js');

const PORT = process.env.PORT || 3001;

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/user', routes);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));