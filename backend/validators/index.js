exports.signupValidator = (req,res,next)=>{
    req.check('firstName','First name is required').notEmpty()
    req.check('lastName','Last name is required').notEmpty()
    req.check('email')
        .isEmail()
        .withMessage('Email must container @')
    req.check('password')
        .isLength({min:8})
        .withMessage('Password must contain at least 8 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number')
    const errors = req.validationErrors()

    if(errors){
        let errorsMsgs=errors.map(err=>{
            return {error:err.msg};
        });
        return res.status(400).json({errors:errorsMsgs});
    }
    next();
};
// exports.userAccountUpdateValidator = (req,res,next)=>{
//     req.check('firstName','First name is required').notEmpty()
//     req.check('lastName','Last name is required').notEmpty()
//     req.check('email')
//         .isEmail()
//         .withMessage('Email must container @')
//     const errors = req.validationErrors()

//     if(errors){
//         let errorsMsgs=errors.map(err=>{
//             return {error:err.msg};
//         });
//         return res.status(400).json({errors:errorsMsgs});
//     }
//     next();
// };