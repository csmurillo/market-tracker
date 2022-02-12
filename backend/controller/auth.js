const User = require('../models/user');
const {WatchList} = require('../models/watchList');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.signup = (req,res)=>{
    bcrypt.hash(req.body.password, 10, function(err, hashPassword) {
        const user = new User({
            ...req.body,
            password: hashPassword,
        });
        user.save((err,user)=>{
            if(err){
                return res.status(400).json({
                    error:"User already exist"+err
                });
            }
            user.password=undefined;
            // create a watchlist that pertains to newly created user
            const watchList = new WatchList({
                owner:user._id
            });
            watchList.save((err,watchList)=>{
                res.status(200).json({
                    user
                });
            });
        });
    });
};

exports.signin = (req,res) => {
    const {watchList,firstName,lastName,email,password} = req.body;
    User.findOne({ email }, async(err,user)=>{
        if(err||!user){
            return res.status(401).json({
                error:"Account does not exist"
            });
        }
        // check password
        const validPassword = await bcrypt.compare(password, user.password);
        // password not valid
        if(!validPassword){
            return res.status(401).json({
                error:"Please check email or password"
            });
        }
        // password valid
        // generate signed token
        const token = jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY);
        user.password=undefined;
        // send token to client side
        res.status(200).json({
            token,
            user
        });
    });
};
exports.verifyPassword=(req,res,next)=>{
    const {userId}=req.userTokenData;
    const { password } = req.body;

    User.findOne({ _id: userId }, async(err, user) => {
        if(err){
            return res.status(401).json({
                error:{serverError:"Error 401 Server Error"}
            });
        }
        const passwordsMatch = await bcrypt.compare(password, user.password);
        // password do not match
        if(!passwordsMatch){
            return res.status(401).json({
                error:{passwordNoMatch:"Incorrect Password"}
            });
        }
        next();
    });
};
exports.deleteAccount = (req,res)=>{
    let user=req.user;
    
    user.remove((err, deletedAccount) => {
        if (err) {
            return res.status(400).json({
                error: "Sorry for the inconvenience something went wrong, our team is working to fix the problem."
            });
        }
        res.json({
            message: 'Account Deleted successfully'
        });
    });
};
exports.isAuth = (req,res,next)=>{
    console.log(req.userTokenData.userId+':'+req.user._id);
    const isAuth = req.userTokenData && req.user && req.userTokenData.userId!=req.user._id;
    if(isAuth){
        return res.status(400).json({
            message:"User does not have access to resource"
        });
    }
    next();
};