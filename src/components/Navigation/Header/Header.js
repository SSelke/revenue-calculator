import React from 'react';
import classes from './Header.css';

const header = (props) => {
    return (
        <div className={classes.Header}>
            <h1><strong>Revenue Projection Calculator</strong></h1>
        </div>
    );
}

export default header;