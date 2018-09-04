import React from 'react'
import classes from './NavigationItem.css';

const navigationItem = (props) => {

    let number = props.value;

    return (
        <div className={classes.NavigationItem}>
            <div>{props.dataType}</div>
            <div>${number.toLocaleString()}</div>
        </div>
    );
}

export default navigationItem;