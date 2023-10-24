// imports
const express = require("express");
const cors = require("cors");
const AuthController = require("./controller/auth");

// create express app and configure it
const app = express();
app.use(cors({origin: "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "WeatherForecast server." });
});

// listen for requests
app.use(AuthController);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});