import React from 'react';
import { Button } from 'react-bootstrap';
import classes from './TableData.css';

const tableData = (props) => {

    return (
        <tr>
            <td>
                <Button bsStyle="danger" bsSize="xsmall" className={classes.Button}>Delete</Button>
            </td>
            <td>{props.name}</td>
            <td>${props.cost}</td>
            <td>{props.percentage}%</td>
            <td>{props.months}</td>
            <td>${props.amountPerMonth.toLocaleString()}</td>
            <td>{props.amountPerYear}</td>
            <td>${props.revenuePerYear.toLocaleString()}</td>
        </tr>
    );
}

export default tableData;