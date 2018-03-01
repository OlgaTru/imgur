const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const db          = require('./config/db');
const path        = require('path');
/*const bootstrap   = require('bootstrap')*/

//init app
const app         = express();

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '/public')));

/*app.use(express.static(path.join(__dirname, 'bootstrap')));*/
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect(db.url, (err, database) =>{
    if (err) return console.log(err);
    require('./app/routes')(app, database);
    app.listen(port, () => {
    console.log("We're live on port: " + port);
    })
})