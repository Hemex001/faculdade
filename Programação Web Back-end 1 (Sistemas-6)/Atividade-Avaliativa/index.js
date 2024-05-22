const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/v1', authRoutes);
app.use('/v1', contactRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
