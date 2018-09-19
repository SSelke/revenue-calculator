import React from 'react';
import { Button } from 'react-bootstrap';
import classes from './ExpenseData.css';

const expenseData = (props) => {

    return (
        <tr className={classes.TableRow}>
            <td>
                <Button bsStyle="danger" bsSize="xsmall" className={classes.Button} onClick={() => props.delete(props.index)}>Delete</Button>
            </td>
            <td><input style={{ width: '100%' }} type="text" value={props.name} onChange={(event) => props.updateName(event.target.value, props.index)} /></td>
            <td><input style={{ width: '100%' }} type="text" value={props.category} onChange={(event) => props.updateCategory(event.target.value, props.index)} /></td>
            <td><span>$<input type="number" style={{textAlign: 'left', width: '80px'}} value={props.amount} onChange={(event) => props.updateAmount(event.target.value, props.index)} /></span></td>
        </tr>
    );
}

export default expenseData;