// import dotenv from 'dotenv';

const db = require("../models");

// const Login = db.login;
const User = db.user;

exports.signin = async (req, res) => {
    User.findOne({
        username: req.body.username, 
    }, 'username password').then((user) => {
        if (user == null) {
          res.status(400).send({message: 'Error logging in'})
        } else {
          if (user.password !== req.body.password) {
            res.status(400).send({message: 'Error logging in'})
          } else {
            res.status(200).send({message: 'Successfully logged in!'});
          }
        }
        // add stuff to check if correct user
    }).catch((err) => {
        res.status(400).send({message: 'Errored!'});
    });
};

// exports.findusers = async (req, res) => {
//   User.find({}).then(() => {

    
//   }).catch((err) => {
//     console.error(err);
//     res.status(500).send({ message: err });
//     return;
//   });
  
//     user.save().then(() => {
//       res.status(200).send({ message: 'User was registered successfully!' });
//     }).catch((err) => {
//       console.error(err);
//       res.status(500).send({ message: err });
//       return;
//     });
// };

exports.signup = async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
    
    user.save().then(() => {
        res.status(200).send({ message: 'User was registered successfully!' });
      }).catch((err) => {
        console.error(err);
        res.status(500).send({ message: err });
      });
};