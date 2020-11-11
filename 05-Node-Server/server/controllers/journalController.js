const express = require('express'); //we import the Express framework and store it inside the variable express. ths instance becomes our gateway to using Express methods.
const router = express.Router(); // we create a new variable called router. Since the express variable (from line 1) gives us access into the express framework, we can access express properties and methods by calling express + ".". Therefore, when we call express.Router() we are using the express variable to access the Router() method. The Router() method will RETURN a router object for us. read more in the Express docs https://expressjs.com/en/4x/api.html#router
const validateSession = require('../middleware/validate-session');
const Journal = require('../db').import('../models/journal')


router.get('/practice', validateSession, function (req, res) {
  //we use the router object by using the router variable to get access into the Router() object methods. -get() is one of the methods in the object, and we call it here. It allows us to complete an HTTP GET request. we pass two arguments into the get method --the first argument is '/practice' (the path). Similiar to how we used /test path previously. --The second argument is a callback function. This is also sometimes called a "handler function". This function gets called when the application receives a request to the specified route and HTTP method. The application "listens" for requests that match the specified route(s) and method(s) and when it detects a match, it calls the specified callback function
  res.send('Hey!! This is a practice route!'); //inside our callback function, we call res.send(). send() is an express method that can be called on the res or response object. Our response parameter is just a simple string
});


/******************************
 * ***** JOURNAL CREATE *****
 *******************************/
router.post('/create', validateSession, (req, res) => {
  const journalEntry = {
    title: req.body.journal.title,
    date: req.body.journal.date,
    entry: req.body.journal.entry,
    owner: req.body.journal.entry,
    owner: req.user.id //this comes for the validateSession
  }
  Journal.create(journalEntry)
  .then(journal => res.status(200).json(journal))
  .catch(err => res.status(500).json({error: err}))
})

/*********************************
 * ****** GET ALL ENTRIES ******
 ********************************/
router.get('/', (req, res) => {
  Journal.findAll()
  .then( journals => res.status(200).json(journals))
  .catch( err => res.status(500).json({error: err}))
})

/*******************************
 * *** GET ENTRIES BY USER ***
 ******************************/
router.get('/mine', validateSession, (req, res) => {
  let userid = req.user.id;
  Journal.findAll({
    where: {owner: userid}
  })
  .then( journals => res.status(200).json(journals))
  .catch( err => res.status(500).json({error: err}))
})

/********************************
 * *** GET ENTRIES BY TITLE ***
 ********************************/
router.get('/:title', (req, res) => {
  let title = req.params.title;

  Journal.findAll({
    where: {title: title}
  })
  .then( journals => res.status(200).json(journals))
  .catch( err => res.status(500).json({error: err}))
})

/**
 * Update
 */

router.put('/update/:entryId', validateSession, (req, res) => {
  const updateJournalEntry = {
    title: req.body.journal.title,
    date: req.body.jouranl.date,
    entry: req.body.journal.entry
  };

  const query = {where: {id: req.params.entryId, owner: req.user.id}};

  Journal.update(updateJournalEntry, query)
  .then( journals => res.status(200).json(journals))
  .catch( err => res.status(500).json({error: err}))
})


/**********************
 * ***** DELETE *****
 *********************/
router.delete('/delete/:id', validateSession, (req, res) => {
  const query = {where: {id: req.params.id, owner: req.user.id}};

  Journal.destroy(query)
  .then(() => res.status(200).json({message: "Journal Entry Removed"}))
  .catch(err => res.status(500).json({error: err}));
})
//CHALLENGE
// router.get('/about', function (req, res) {
//   res.send('This is the about route');
// });

module.exports = router; //we EXPORT the module for usage outside of the file.
