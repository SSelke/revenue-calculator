import React from 'react';
import { Button } from 'react-bootstrap';

const add = (props) => {

    return (
            <td style={{margin: '0 auto'}}>
                <Button style={{width: '60px'}} bsStyle="success" bsSize="xsmall" onClick={props.clicked}>Add</Button>
            </td>
    );
}

export default add;