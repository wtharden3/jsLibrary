let express = require('express'); //here we require the use of the express npm package which we've installed in our dependencies
let app = express(); // we create an instance of express. we're firing off a top-level express() function exported by the Express module. this allows us to create an Express app.
// *** ADD LINE BELOW
let sequelize = require('./db');

let journal = require('./controllers/journalController'); // We import the route object that we just created and store it in the variable called journal

// ********** ADD 2 LINES BELOW
sequelize.sync();
//sequalize.sync({force: true})

app.use('/journal', journal); //we call app.use() and in the first parameter create a base URL called /journal. So our base URL will look like this: http://localhost:3000/journal   For our second parameter for the use() function we pass in journal. This means that all routes created in the journalController.js file will be sub-routes. It will look like this: http://localhost:3000/journal or http://localhost:3000/journal/

app.listen(3000, function () {
  //app.listen will use express to start an UNIX socket and listen for connections on the given path. The given path is localhost:3000 indicated by the parameter of 3000
  console.log('App is listening on port 3000'); //we use the callback function when the connection happens. The console.log allows us to see a message with the port that the server is running on
});
