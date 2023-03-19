const express = require("express");
const router = express.Router();
require("../DB/conn");
const User = require('../Models/userSchema');
router.get("/",(req, res)=> {
    res.send(`Hi router`);
}) ;

router.get("/about",(req, res)=> {
    res.send(`Hi router`);
}) ;

// ----------Using promises--------------
// router.post("/register",(req, res)=> {
//     // console.log(req.body) 
//     // console.log(req.body.name) 
//     // console.log(req.body.email) 
//     // res.json({message:req.body})
//     // res.send(`Hi router`);
//     const {name ,email , phone , work , password ,cpassword } = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"Fill all fileds"});
//     }
//     User.findOne({email:email})
//         .then((userExist) =>{
//             if(userExist){
//                 return res.status(422).json({error:"Email alredy exist"});
//             }
//             const user = User({name ,email , phone , work , password ,cpassword});
//             user.save().then(()=>{
//                 return res.status(201).json({message:"user register successfully"});
//             }).catch((err) => {
//                 return res.status(500).json({message:"faild to register"});
//             })
//         }).catch(err => {console.log(err)})

// }) ;

//------------using async-----------------------
router.post("/register", async(req, res)=> {
    // console.log(req.body) 
    // console.log(req.body.name) 
    // console.log(req.body.email) 
    // res.json({message:req.body})
    // res.send(`Hi router`);
    const {name ,email , phone , work , password ,cpassword } = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Fill all fileds"});
    }

    try {
       const userExist = await User.findOne({email:email})

        if(userExist){
            return res.status(422).json({error:"Email alredy exist"});
        }
        const user = User({name ,email , phone , work , password ,cpassword});
        await user.save()
        return res.status(201).json({message:"user register successfully"});

    } catch (error) {
        console.log(error)
    } 

}) ;


module.exports = router;