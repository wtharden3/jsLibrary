let express = require('express'); //we import the Express framework and store it inside the variable express. ths instance becomes our gateway to using Express methods.
let router = express.Router(); // we create a new variable called router. Since the express variable (from line 1) gives us access into the express framework, we can access express properties and methods by calling express + ".". Therefore, when we call express.Router() we are using the express variable to access the Router() method. The Router() method will RETURN a router object for us. read more in the Express docs https://expressjs.com/en/4x/api.html#router

router.get('/practice', function (req, res) {
  //we use the router object by using the router variable to get access into the Router() object methods. -get() is one of the methods in the object, and we call it here. It allows us to complete an HTTP GET request. we pass two arguments into the get method --the first argument is '/practice' (the path). Similiar to how we used /test path previously. --The second argument is a callback function. This is also sometimes called a "handler function". This function gets called when the application receives a request to the specified route and HTTP method. The application "listens" for requests that match the specified route(s) and method(s) and when it detects a match, it calls the specified callback function
  res.send('Hey!! This is a practice route!'); //inside our callback function, we call res.send(). send() is an express method that can be called on the res or response object. Our response parameter is just a simple string
});

//CHALLENGE
router.get('/about', function (req, res) {
  res.send('This is the about route');
});

module.exports = router; //we EXPORT the module for usage outside of the file.
