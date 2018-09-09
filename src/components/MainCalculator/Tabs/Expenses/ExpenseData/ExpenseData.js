import React from 'react';
import { Button } from 'react-bootstrap';
import classes from './ExpenseData.css';

const expenseData = (props) => {

    const changeHandler = (event) => {

    }

    return (
        <tr>
            <td>
                <Button bsStyle="danger" bsSize="xsmall" className={classes.Button}>Delete</Button>
            </td>
            <td>Office</td>
            <td>Rent</td>
            <td>$500</td>
        </tr>
    );
}

export default expenseData;