// Setting basic packages & variabels
// -----------------------------------
var express = require('express'), // Routing etc, ...
    MySQL   = require('mysql'),   // Database driver.
    fs      = require('fs'),      // FileSystem API
    app     = express();          // Just a variable

// MySQL Credentials
// -----------------------------------
// Set debug true if you want to see the debug logger.

global.Pool = MySQL.createPool({
  host     : '185.13.227.159',
  port     : '3306',
  user     : 'timjoot143_root',
  password : '0474834880',
  database : 'timjoot143_FallenSoldiers',
  debug    : false
});

// Load routes
// -----------------------------------

var Front              = require('./core/routes/Front'),
    Regimenten         = require('./core/routes/Regimenten'),
    Begraafplaatsen    = require('./core/routes/Begraafplaatsen');
    Militairen         = require('./core/routes/Militairen');

// Routing
// -----------------------------------
// @return = JSON Array's

/* GET requests */
app.get('/api/', Front.Index);
app.get('/api/GET/Regimenten', Regimenten.Regimenten);
app.get('/api/GET/Regiment/:regiment_id', Regimenten.SingleRegiment);
app.get('/api/GET/Begraafplaatsen', Begraafplaatsen.Begraafplaatsen);
app.get('/api/GET/Begraafplaats/:GID', Begraafplaatsen.Begraafplaats);
app.get('/api/GET/Militairen', Militairen.Gesneuvelden);

/* DELETE requests */

// Start server
// -----------------------------------
var server = app.listen(3000, function() {
  console.log('Succesfully connect to MySQL database.');
  console.log('Listening to port', server.address().port);
});

// No Animals where harmed during the development of this code
