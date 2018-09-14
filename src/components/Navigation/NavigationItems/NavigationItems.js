import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => {
    return (
        <div className={classes.NavigationItems}>
            <NavigationItem dataType='Profit' value={props.profit}/>
            <NavigationItem dataType='Revenue' value={props.revenue}/>
            <NavigationItem dataType='Expenses' value={props.expenses >= 0 ? props.expenses : 31596}/>
            <NavigationItem dataType='Rate' value={props.rate}/>
        </div>
    );
}

export default navigationItems;