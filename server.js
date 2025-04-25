const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const empRoutes = require('../Routes/EmpRoutes');

dotenv.config();
const app = express()
app.use(express.json());

mongoose.connect(process.env.MongoUrl)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB Connecton error',err));

app.use('/api/employees',EmpRoutes);
app.listen(prompt, () => {
    console.log(`Server running on port ${PORT}`);
}
);