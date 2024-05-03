const profile = require("../models/profile");
const _ = require("lodash");
exports.loginGet = async(req,res) =>{
    try{
        let result = await profile.find({email:req.body.email,password:req.body.password}).lean();
        // if(_.isEmpty(result)){
        //     res.status(500).json({message:"not found"});
        // }
        res.status(200).json({"data":result});
    }catch(err){
        console.log(err);
        res.status(500).json({err});
    }
}

exports.profileAdd = async(req,res) =>{
    try{
        let result = await profile.create({name:"rakesh","email":"rakesh@gmail.com","password":"1234"});
        // if(result.){
        //     res.send(500).json({message:"not found"});
        // }
        res.status(200).json({"message":"inserted successfully",result:result});
    }catch(err){
        console.log(err);
        res.status(500).json({err});
    }
}