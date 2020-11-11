const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/* *******************************
 ********** USER SIGNUP ********
 ******************************* */
router.post('/create', function (req, res) {
  User.create({
    email: req.body.user.email, // we use the "req.body" middleware provided by Express and append two properties
    password: bcrypt.hashSync(req.body.user.password, 13),
  })
    .then(function createSuccess(user) {
      let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
      });

      res.json({
        user: user,
        message: 'User successfully created!',
        sessionToken: token,
      });
    })
    .catch(err => res.status(500).json({ error: err }));
});

/* *******************************
 ********** USER SIGNIN ********
 ******************************* */
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.user.email
    }
  })
    .then((user) => {
      if (user) {
        //bcrypt.compare() will hash requested password (the password we send via postman) and then compare to the already hashed password in the database -- this will NOT work on non hashed passwords in the database
        bcrypt.compare(req.body.user.password, user.password, (err, matches) => {
            if (matches) {

              let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

              res.status(200).json({
                user: user,
                reqAndUserPassMatch: user.password === req.body.user.password,
                message: 'Welcome, you have logged in',
                sessionToken: token
              })

            } else {
              res.status(502).json({ error: 'Login failed.' });
            }
          });
    } else {
      res.status(500).json({ error: 'User does not exist.' });
    }})
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;

//findOne() is a sequelize method that does exactly what it says: it tries to find something within the database that we tell it to look for. Data Retrieval
// where is an object within Sequelize that tells the database to look for something matching its properties
// we want to find a user with the property of email whose value matches the value passed from the client
