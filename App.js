const dotenv = require("dotenv"); 
const express = require("express");
const app = express();

dotenv.config({path:'./.env'}) 
require('./DB/conn');
const port = process.env.PORT;
const User = require("./Models/userSchema")
const middelware =(req, res, next )=>{
    console.log("middelware");
    next()
}   

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// }); 

app.get("/",(req, res)=> {
    // res.send(`Hi Dharmesh`);
}) ;
 
app.get("/about", middelware, (req, res)=> {
    // res.send(`Hi dc`);
}) ;

app.listen(port,()=>{
    console.log(`port = ${port}`)
})

