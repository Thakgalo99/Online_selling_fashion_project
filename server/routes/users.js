var express = require('express');
var router = express.Router();
var users_model = require('../models/users_model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  users_model.find((err, data) => {
    if (err) throw err;
    res.send(data);
  })
});

//function for adding a new user to the table
router.post('/', function (req, res) {
  users_model.create(req.body, (err, data) => {
    if (err) throw err;
    res.send(data);
  })
});

//function for getting a user by an id
router.get('/:id', function (req, res, next) {
  users_model.findById(req.params.id, (err, data) => {
      if (err) throw err;
      res.send(data);
  })
});

//function for loggin a user in
router.post('/userlogin', function (req, res) {
  users_model.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
    if (err) throw err;
    if (!user) return res.status(404).send("failed.");
    console.log(user);
    res.send(user);
  })
});

//function for deleting a user in the database
router.delete('/:id', function (req, res) {
  users_model.findById(req.params.id, (err, data) => {
      if (err) throw err;
      if (!data)
          return res.status(404).send("failed");
          users_model.findByIdAndDelete(req.params.id, (err, data) => {
          if (err) throw err;
          res.send(data);
      });
  });
});

//function for updating a user
router.put('/:id', function (req, res) {
  users_model.findById(req.params.id, (err, data) => {
      if (err) throw err;
      if (!data)
          return res.status(404).send("failed");
          users_model.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
          if (err) throw err;
          res.send(data);
      });
  });
});

module.exports = router;
