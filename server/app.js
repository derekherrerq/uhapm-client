// import apiRoute from './api/routes/apiRoute';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('Server started'));

// app.use('/api/apiRoute', apiRoute));
