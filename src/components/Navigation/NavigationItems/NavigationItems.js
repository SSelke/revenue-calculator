import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => {
    return (
        <div className={classes.NavigationItems}>
            <NavigationItem dataType='Profit' value={props.numbers.profit}/>
            <NavigationItem dataType='Revenue' value={props.numbers.revenue}/>
            <NavigationItem dataType='Expenses' value={props.numbers.expenses}/>
            <NavigationItem dataType='Rate' value={props.numbers.rate}/>
        </div>
    );
}

export default navigationItems;