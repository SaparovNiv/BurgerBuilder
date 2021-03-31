import React from 'react';
import classes from './Button.module.css';
import classs from './Button.module.css'
const button = (props) => (
    <button
        className={classes[props.btnType]}
        onClick={props.click}>
        {props.btnType}</button>
)

export default button;