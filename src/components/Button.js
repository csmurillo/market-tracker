import React from 'react';


const Button = ({className,color='',colorText='',children}) =>{

    return (
        <button className={className} style={{backgroundColor:color, color:colorText}}>
            { children }
        </button>
    );
};

export default Button;