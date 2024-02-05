require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const path = require('path');
const mongoose = require('mongoose');



const app = express();
const port = process.env.PORT || 3333;

mongoose.connect(process.env.DATABASE_STRING);
const db = mongoose.connection
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('   Database Connected...'))


app.use(cors());
app.use(cookieParser());
app.use(express.json());

const subscribersRouter = require('./src/routes/subscribers')
app.use('/subscribers', subscribersRouter)

const usersRouter = require('./src/routes/users')
app.use(usersRouter)


app.listen(port, function(){
    console.log('Server Running:')
    console.log(`   listening on port ${port}`)
})