const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose")

const uri = process.env.DATABASE;

mongoose.connect(uri,{ 
    useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 

}).then(()=>{
    console.log('connett')
}).catch(()=>{
    console.log("error")
})