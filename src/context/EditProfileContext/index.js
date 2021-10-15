import { useState,useEffect } from "react";
import { getToken, isAuthenticated } from '../../adapters/authApi';
import { getUserInformation,updateProfile } from "../../adapters/userApi";


const EditProfileContext = (validator)=>{
    const [values,setValues]=useState({
        firstName:'',
        lastName:'',
        email:''
    });
    const [errors,setErrors]=useState({});

    const [submittingForm,setSubmittingForm]=useState(false);
    const [updatedProfileInformation,setUpdatedProfileInformation]=useState(false);

    // localstorage values
    const authInfo = isAuthenticated();
    const token = getToken();
    const {firstName,lastName,email}=values;

    const onValuesChange = (e)=>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        });
    };

    const onHandleSubmit=(e)=>{
        e.preventDefault();
        console.log(values);
        setErrors(validator(values));
        setSubmittingForm(true);
    };

    // component mount get user information from server
    useEffect(()=>{
        getUserInformation(authInfo._id,token).then((res)=>{
            const {firstName,lastName,email}=res;
            setValues({
                ...values,
                ['firstName']:firstName,
                ['lastName']:lastName,
                ['email']:email
            });
        });
    },[]);

    // clear error when user commence retyping
    useEffect(()=>{
        setErrors({});
    },[values]);

    // submit form when no errors and form has been submitted
    useEffect(()=>{
        if(submittingForm && Object.keys(errors).length===0){
            submitForm();
        }
        setSubmittingForm(false);
    },[submittingForm]);

    const submitForm = ()=>{
        const values={
            firstName:firstName,
            lastName:lastName,
            email:email
        };
        updateProfile(authInfo._id,token,values).then((res)=>{
            const{error}=res;
            if(error){
                console.log(error+'error here!!');
                setErrors(error);
            }
            else{
                setUpdatedProfileInformation(true);
            }
        });
    };
    return {firstName,lastName,email,errors,updatedProfileInformation,onValuesChange,onHandleSubmit};
};

export {EditProfileContext};