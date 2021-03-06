import React from 'react';
import classes from './BuildControl.module.css'



const buildControl = (props) => {
    return (
        <div classes={classes.BuildControl}>
            <div classes={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.removed}>Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
    );
}
export default buildControl;