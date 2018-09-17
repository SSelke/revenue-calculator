import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import classes from './TableData.css';

const tableData = (props) => {

    const cost = props.cost;
        return (
            <tr>
                <td>
                    <ButtonGroup>
                        <Button bsStyle="danger" bsSize="xsmall" onClick={() => props.delete(props.index)}>Delete</Button>
                    </ButtonGroup>
                </td>
                <td className={classes.Data}>
                    <input type="text" value={props.name}
                                       onChange={(event) => props.productUpdate(event.target.value, props.index)} />
                </td>
                <td className={classes.Data}>
                    <span style={{ marginLeft: '58px' }}>$
                        <input type="number" style={{ width: '100px', textAlign: 'left' }}
                                                value={cost}
                                                onChange={(event) => props.updateCost(event.target.value, props.index)} />
                    </span>
                </td>
                <td className={classes.Data}>
                    <span>
                        <input type="number" style={{ width: '50px', textAlign: 'right' }}
                                             value={props.percentage} 
                                             onChange={(event) => props.percentageUpdate(event.target.value, props.index)} />
                    %</span>
                </td>
                <td>{props.months}</td>
                <td>${props.amountPerMonth.toLocaleString()}</td>
                <td>{props.amountPerYear}</td>
                <td>${props.revenuePerYear.toLocaleString()}</td>
            </tr>
        );
}

export default tableData;