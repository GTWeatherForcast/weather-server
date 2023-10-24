// imports
const express = require("express");
const cors = require("cors");
// const AuthController = require("./controller/auth");
// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
const uri = "mongodb+srv://forecastweather:GTwebdev@cluster0.o2oa4an.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
  console.log("You successfully connected to MongoDB!");
}).catch((err) => {
  console.error(err);
});

// create express app and configure it
const app = express();
app.use(cors({origin: "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// simple route
app.get('/', (req, res) => {
    res.json({ message: "WeatherForecast server." });
});

// routes
require('./routes/auth.routes')(app);

// listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});