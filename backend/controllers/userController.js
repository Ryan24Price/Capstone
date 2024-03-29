"use strict";
let Models = require("../models");

const getUsers = (res) => {
  // get the user
  Models.User.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createUser = (data, res) => {
  // create the user
  console.log("createUser:", data);
  new Models.User(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
  // update the user
  console.log("updateUser:", req.body);
  Models.User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteUser = (req, res) => {
  // deletes the user 
  Models.User.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const loginUser = (req, res) => {
  console.log("trying to login a user", req.body);
  Models.User.findOne({ email: req.body.email })
    .then((data) => {
      console.log(data);
      if (data) {
        const dbPassword = data.password;
        const reqPassword = req.body.password;
        if (dbPassword === reqPassword) {
          console.log("password is correct");
          res.send({ result: 200, data: data });
        } else {
          res.status(400).send({ result: 400, data: "wrong password" });
        }
      } else {
        res.status(404).send({ result: 404, data: "user not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
 
module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser
};


