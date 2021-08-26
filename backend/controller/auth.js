const User = require('../models/user');
const {WatchList} = require('../models/watchList');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


exports.signup = (req,res)=>{
    bcrypt.hash(req.body.password, 10, function(err, hashPassword) {
        const user = new User({
            ...req.body,
            password: hashPassword
        });
        user.save((err,user)=>{
            if(err){
                return res.status(400).json({
                    error:"email already exists"
                });
            }
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
    console.log('inside1'+password);
    User.findOne({ email }, async(err,user)=>{
        if(err||!user){
            return res.status(401).json({
                message:"Something went wrong please check email or password"
            });
        }
        // check password
        const validPassword = await bcrypt.compare(password, user.password);
        // password not valid
        if(!validPassword){
            return res.status(401).json({
                message:"Password not valid"
            });
        }
        // password valid
        // generate signed token
        const token = jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY);

        // send token to client side
        res.status(200).json({
            token,
            user:{
                id:user._id,
                firstName,
                lastName,
                email,
                watchList
            }
        });
    });
};

exports.deleteAccount = (req,res)=>{
    let {user}=req.user;
    
    user.remove((err, deletedAccount) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({
            message: 'Account Deleted successfully'
        });
    });
};
exports.isAuth = (req,res,next)=>{
    const {userId}=req.userTokenData;
    const {user}=req.user._id;
    if(userId==user._id){
        res.status(400).json({
            message:"User does not have access to resource"
        });
    }
    next();
};