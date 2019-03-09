const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


const app = express();

const port = process.env.PORT || 3030;

//Map global promise to remove depracated warning!
mongoose.Promise = global.Promise;
//Connect to MongoDB via mongoose
mongoose.connect('mongodb+srv://dave:batfink21@sitecloud-gwcy3.gcp.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
    .then( () => { console.log('MongoDB Connected') } )
    .catch( (err) => { console.log(err) } );

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));