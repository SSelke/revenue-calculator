import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import classes from './Revenue.css';

const revenue = (props) => {
    return (
        <div id='revenue' style={props.style} className={classes.Revenue}>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>%</th>
                                    <th colSpan="2">Month</th>
                                    <th colSpan="2">Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$500</td>
                                    <td>35%</td>
                                    <td>14</td>
                                    <td>$7000</td>
                                    <td>168</td>
                                    <td>$84000</td>
                                </tr>
                                <tr>
                                    <td>$500</td>
                                    <td>35%</td>
                                    <td>14</td>
                                    <td>$7000</td>
                                    <td>168</td>
                                    <td>$84000</td>
                                </tr>
                                <tr>
                                    <td>$500</td>
                                    <td>35%</td>
                                    <td>14</td>
                                    <td>$7000</td>
                                    <td>168</td>
                                    <td>$84000</td>
                                </tr>
                                <tr>
                                    <td>$500</td>
                                    <td>35%</td>
                                    <td>14</td>
                                    <td>$7000</td>
                                    <td>168</td>
                                    <td>$84000</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs={12}>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>%</th>
                                    <th colSpan="2">Month</th>
                                    <th colSpan="2">Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$500</td>
                                    <td>35%</td>
                                    <td>14</td>
                                    <td>$7000</td>
                                    <td>168</td>
                                    <td>$84000</td>
                                </tr>
                                <tr>
                                    <td>$500</td>
                                    <td>35%</td>
                                    <td>14</td>
                                    <td>$7000</td>
                                    <td>168</td>
                                    <td>$84000</td>
                                </tr>
                                <tr>
                                    <td>$500</td>
                                    <td>35%</td>
                                    <td>14</td>
                                    <td>$7000</td>
                                    <td>168</td>
                                    <td>$84000</td>
                                </tr>
                                <tr>
                                    <td>$500</td>
                                    <td>35%</td>
                                    <td>14</td>
                                    <td>$7000</td>
                                    <td>168</td>
                                    <td>$84000</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default revenue;