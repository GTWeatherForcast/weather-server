// import dotenv from 'dotenv';
// import { insertUser } from '../service/service';

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { insertUser } = require("../service/service");

const AuthController = express.Router();
AuthController.use(cors({ origin: '*' }));
AuthController.use(bodyParser.json());

AuthController.post("/api/v1/sign-up", (req, res) => {  
    insertUser(req.body.username, req.body.email, req.body.password);
    res.json({message: "Done"})
});
  
AuthController.post("/api/v1/sign-in", (req, res) => {
    console.log(req.body.message);
    res.json({ message: "Done" });
});


export default AuthController;