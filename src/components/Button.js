import React from 'react';

const Button = ({className,type='',styles,children}) =>{
    return (
        <button type={type} className={className} style={styles}>
            { children }
        </button>
    );
};
export default Button;