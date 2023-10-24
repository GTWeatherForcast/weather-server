const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://forecastweather:GTwebdev@cluster0.o2oa4an.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {serverApi: ServerApiVersion.v1,});

async function connect() {
      try {
        client.connect();
        client.db("weather").command({ ping: 1 });
        console.log("You successfully connected to MongoDB!");
      } catch(e) {
        console.error(e)
      }
}

async function insertUser(u, e, p) {
    connect();
    const database = client.db("weather");
    const a = database.collection("users");

    const user = {
      username: u,
      email: e,
      password: p,
    }

    const result = await a.insertOne(user);
    console.log("Added Document: " + result.insertedId);
}

// export { insertUser };