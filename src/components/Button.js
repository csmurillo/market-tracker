import React from 'react';

const Button = ({className,type='',styles,children,dataToggle='',dataTarget='',dataDismiss=''}) =>{
    return (
        <button type={type} className={className} style={styles} data-toggle={dataToggle} data-target={dataTarget} data-dismiss={dataDismiss}>
            { children }
        </button>
    );
};
export default Button;