import React from 'react';


const Button = ({color,textContent}) =>{

    return (
        <button className="btn" style={{backgroundColor:color}}>
            { textContent }
        </button>
    );
};

export default Button;