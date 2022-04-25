
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://codeial_delovpment:codeial123@cluster0.6qqeo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

    {
    //   useNewUrlParser: true,
    //   useFindAndModify: false,
      useUnifiedTopology: true
    }
  );

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


// module.exports =db;


// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');  

// const dbName = 'codeial';
// const url = "mongodb+srv://codeial_delovpment:codeial123@cluster0.6qqeo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// // Create a new MongoClient
// const client = new MongoClient(url);

// // Use connect method to connect to the Server
// module.exports=db=()=>{


// client.connect(function(err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
  
//     const db = client.db(dbName);
  
//     client.close();
// })
// }


// const mongoose = require('mongoose')

// const url = "mongodb+srv://codeial_delovpment:codeial123@cluster0.6qqeo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const connectionParams={
//     useNewUrlParser: true,
//     useUnifiedTopology: true 
// }

// module.exports= connectToDB = ()=>{
// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to the database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. n${err}`);
//     })
// }
