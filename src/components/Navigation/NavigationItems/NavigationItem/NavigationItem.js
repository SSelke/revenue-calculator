import React from 'react'
import classes from './NavigationItem.css';

const navigationItem = (props) => {

    return (
        <div className={classes.NavigationItem}>
            <div>{props.dataType}</div>
            <div>${(props.value).toLocaleString()}</div>
        </div>
    );
}

export default navigationItem;