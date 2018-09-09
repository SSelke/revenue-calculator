import React from 'react';
import classes from './Model.css';

const model = (props) => {

    const style = {
        display: props.visible ? 'block' : 'none'
    };
    return (
        <div style={style} className={classes.Model}>
            Hello
        </div>
    );
}

export default model;