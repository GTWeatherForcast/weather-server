// imports
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://forecastweather:GTwebdev@cluster0.o2oa4an.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient
const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

try {
  client.connect();
  client.db("admin").command({ ping: 1 });
  console.log("You successfully connected to MongoDB!");
} catch(e) {
  console.error(e)
}

// create express app and configure it
const app = express();
app.use(cors({origin: "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "WeatherForecast server." });
});

app.post("/api/v1/sign-in", (req, res) => {
  console.log(req.body.message);
  res.json({ message: "works" });
});

// routes
require('./routes/auth.routes')(app);

// listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});