// imports
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
const uri = "mongodb+srv://forecastweather:GTwebdev@cluster0.o2oa4an.mongodb.net/?retryWrites=true&w=majority";

/*Create a MongoClient
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
*/
mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
  console.log("Connected");
}).catch((err) => {
  console.error(err);
});

var Schema = mongoose.Schema;
var loginSchema = new Schema({
  username: String,
  password: String
});
var login = mongoose.model('login', loginSchema)



// create express app and configure it
const app = express();
app.use(cors({origin: "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// simple route
app.get('/', (req, res) => {
    res.send("hello")
    res.json({ message: "WeatherForecast server." });
    console.log("works")
});


app.post('/sign-in', (req, res) => {
  console.log("here")
  login.findOne({username: req.body.username, password: req.body.password}, function(err, user)
  {
    if (err || !user) {
      res.send("User not found")
      console.log("Fail")
    } else {
      res.send("Logged in!")
      console.log("works")
    }
  });
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