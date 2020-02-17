// mongo db connection string
var connectionstr = "mongodb+srv://nodejs:nodejs@nodejs-fgpxi.mongodb.net/test?retryWrites=true&w=majority";

const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient(connectionstr, { useNewUrlParser: true, useUnifiedTopology: true });


mongoClient.connect().then((db) => {
    console.log("db connect");
}).catch((err) => {
    console.log("hata");
})

module.exports=mongoClient;