import React from 'react'
import './Input.css';

const Input=(props)=> {
    return (
            <input 
            className={props.inputSize} 
            placeholder={props.placeholder}
             onChange={props.changed}/>              
    )
}

export default Input;
