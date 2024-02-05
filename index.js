const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3333;

app.use(cors({
    origin: '*'
}));

const mongoose = require('mongoose');

mongoose.connect( process.env.DATABASE_STRING);
const db = mongoose.connection
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('   Database Connected...'))


const post_route = require('./src/routes/postRoute');
app.use('/api',post_route);




app.listen(port, function(){
    console.log('Server is Running...')
    console.log(`   listening on port ${port}`)
})