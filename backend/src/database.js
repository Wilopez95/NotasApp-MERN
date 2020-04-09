
const mongoose = require('mongoose');

const URI = process.env.DB_URI;


mongoose.connect(URI,{
    useNewUrlParser: true,
    useCreateIndex:true, 
    useFindAndModify:false,
    useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open',()=> {
    console.log('Data Base connection established successfully')
});