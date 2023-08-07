// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tokenRoutes = require('./routes/tokenRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3001;

app.use('/api', tokenRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
