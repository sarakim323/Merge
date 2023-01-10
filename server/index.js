const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.all('/*', (req, res) => {
  return axios({
    method: req.method,
    url: process.env.API_URL + req.url,
    headers: {
      Authorization: process.env
    }
  })
})

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));