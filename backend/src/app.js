const express = require ('express');
const cors = require('cors');
const app = express();


// Settings

app.set('port',process.env.PORT || 6000)

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get('/',(req,res)=> res.send('My app on REACT'))
app.use('/users',require('./routes/users'))
app.use('/notes',require('./routes/notes'))


module.exports = app