// import dotenv from 'dotenv';

const db = require("../models");

const Login = db.login;
const Register = db.register;

exports.signin = async (req, res) => {
    Login.findOne({
        username: req.body.username, 
        password: req.body.password, 
    }).then((user) => {
        // add stuff to check if correct user
        res.status(200).send({message: 'Successfully logged in!'});
    }).catch((err) => {
        res.status(400).send({message: 'Errored!'});
    });
};

exports.signup = async (req, res) => {
    const user = new Register({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
    
      user.save((err) => {
        if (err) {
          console.error(err);
          res.status(500).send({ message: err });
          return;
        }
        res.status(200).send({ message: 'User was registered successfully!' });
      });
};