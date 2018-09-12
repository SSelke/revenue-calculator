import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import classes from './TableData.css';

const tableData = (props) => {
    return (
        <tr>
            <td>
                <ButtonGroup>
                    <Button bsStyle="danger" bsSize="xsmall" onClick={() => props.delete(props.index)}>Delete</Button>
                </ButtonGroup>
            </td>
            <td className={classes.Data}>
                <input type="text" value={props.name}
                    onChange={(event) => props.updateName(event.target.value, props.index, props.type)} />
            </td>
            <td className={classes.Data}>
                <span style={{marginLeft: '58px'}}>$
                        <input type="number" style={{ width: '100px', textAlign: 'left' }}
                        value={props.cost}
                        onChange={(event) => props.updateCost(event.target.value, props.index, props.type)} />
                </span>
            </td>
            <td className={classes.Data}>
                <span>
                    <input type="number" style={{ width: '60px', textAlign: 'right' }}
                        step="0.25"
                        value={props.time}
                        onChange={(event) => props.updateTime(event.target.value, props.index, props.type)} />
                    </span>
            </td>
            <td>${Math.ceil((props.cost / props.time)).toLocaleString()}</td>
        </tr>
    );
}

export default tableData;