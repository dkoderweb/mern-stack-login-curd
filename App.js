const dotenv = require("dotenv"); 
const express = require("express");
const app = express();

dotenv.config({path:'./.env'}) 
require('./DB/conn');
app.use(express.json())
app.use(require('./Router/route'));
const port = process.env.PORT;
const User = require("./Models/userSchema")


const middelware =(req, res, next )=>{
    console.log("middelware");
    next()
}   

// app.get("/",(req, res)=> {
//     // res.send(`Hi Dharmesh`);
// }) ;
 
// app.get("/about", middelware, (req, res)=> {
//     // res.send(`Hi dc`);
// });

app.listen(port,()=>{
    console.log(`port = ${port}`)
})

