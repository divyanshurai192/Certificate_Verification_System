const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/certificates');

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/certificates', require('./routes/certificateRoutes'));

app.listen(5000, ()=>console.log('Backend running'));