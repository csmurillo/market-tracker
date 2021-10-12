exports.signupValidator = (req,res,next)=>{
    req.check('firstName','First name is required').notEmpty()
    req.check('lastName','Last name is required').notEmpty()
    req.check('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Email must container @')
    req.check('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({min:8})
        .withMessage('Password must contain at least 8 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number')
    const errors = req.validationErrors()

    if(errors){
        let errorsMsgs=errors.map(err=>{
            return {field:err.param,error:err.msg};
        });
        return res.status(400).json({error:errorsMsgs});
    }
    next();
};
exports.signinValidator = (req,res,next)=>{
    req.check('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Email must container @')
    req.check('password')
        .notEmpty()
        .withMessage('Password is required')
    const errors = req.validationErrors()

    if(errors){
        let errorsMsgs=errors.map(err=>{
            return {field:err.param,error:err.msg};
        });
        return res.status(400).json({error:errorsMsgs});
    }
    next();
};
exports.userChangePasswordValidator = (req,res,next)=>{
    const {password,retypedPassword}=req.body;
    const errors={};
    // check for errors in password & retypedPassword
    req.check('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({min:8})
    .withMessage('Password must contain at least 8 characters')
    .matches(/\d/)
    .withMessage('Password must contain a number')
    req.check('retypedPassword')
    .notEmpty()
    .withMessage('Retyped password is required')
    .isLength({min:8})
    .withMessage('Retyped password must contain at least 8 characters')
    .matches(/\d/)
    .withMessage('Retyped password must contain a number')

    // check if password and retypedPassword not same
    if(password!==retypedPassword){
        errors.nomatch="Passwords did not match";
    }
    // set errors
    const validationErrors = req.validationErrors();
    if(validationErrors){
        // init error arrays
        let passwordError=[];
        let retypedPasswordError=[];
        // push all errors to the existant array
        validationErrors.map(err=>{
            if(err.param=='password'){
                passwordError.push(err.msg);
            }
            else if(err.param=='retypedPassword'){
                retypedPasswordError.push(err.msg);
            }
        });
        // only set first errors
        errors.password=passwordError[0];
        errors.retypedPassword=retypedPasswordError[0];
        // send all errors that occurred
        return res.status(400).json({error:errors});
    }
    else if(errors.nomatch){
        // send all errors that occurred
        return res.status(400).json({error:errors});
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