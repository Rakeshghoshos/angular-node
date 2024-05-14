const profile = require("../models/profile");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const {encrypt,decrypt} = require("../encryptor");

const generateAccessToken = (userData) => {
    let token = jwt.sign(userData, process.env.JWT_TOKEN, {
      expiresIn: `${process.env.EXPIRY_DAYS}d`
    });
    return encrypt(token);
  };

exports.auth = async(req,res,next)=>{
    try{
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        let token = bearer[1];
        if(Boolean(token)){
              token = decrypt(token);
              jwt.verify(token,process.env.JWT_TOKEN,(err,auth)=>{
                if(err){
                    return res.status(401).json({message:"you are not authorized","data":0});
                }
                // let result = await profile.find({email:auth.email}).lean();
                console.log(auth);
                next();
              })
        }else{
            return res.status(401).json({message:"you are not authorized","data":0});
        }
    }
    }catch(err){
        console.log(err);
        return res.status(500).json({err});
    }
}
exports.loginGet = async(req,res) =>{
    try{
        let result = await profile.find({email:req.body.email,password:req.body.password}).lean();
        if(_.isEmpty(result)){
            return res.status(200).json({message:"not found","data":0});
        }
        result.token = generateAccessToken({"email":email});
        result.success = 1;
        return res.status(200).json({"message":"login successfully",result:result});     
    }catch(err){
        console.log(err);
        return res.status(500).json({err});
    }
}

exports.profileAdd = async(req,res) =>{
    try{
        let email = req.body.email;
        let password = req.body.password;
        password = encrypt(password);
        let result = await profile.create({"email":email,"password":password});
        if(_.isEmpty(result)){
            return res.send(500).json({message:"not found"});
        }
        result.token = generateAccessToken({"email":email});
        result.success = 1;
        return res.status(200).json({"message":"inserted successfully",result:result});
    }catch(err){
        console.log(err);
        return res.status(500).json({err});
    }
}