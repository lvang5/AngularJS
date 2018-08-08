const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const port = process.env.PORT || 5000;

//use

app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static('server/public'));


//spin up server
app.listen( port, ()=> {
    console.log('server is up on:', port);
    
})//end spin up server