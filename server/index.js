require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./src/routes');
const connectDB = require('./src/utils/db');

const app = express();
const port = process.env.PORT;

//establishing database connection
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(port, () =>{
    console.log(`Server is running at port ${port}!`);
})