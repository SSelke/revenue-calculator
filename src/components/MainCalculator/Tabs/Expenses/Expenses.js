import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import ExpenseData from './ExpenseData/ExpenseData';
import Add from '../Revenue/TableData/Add/Add';
import classes from './Expenses.css';

const expenses = (props) => {
    return (
        <div id="expenses" style={props.style} className={classes.Expenses}>
            <Grid>
                <Row>
                    <Col>
                        <div className={classes.Header}>
                            <h1>Expenses</h1>
                            <p>The <em>FASTEST</em> way to profit is to reduce expenses!</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped className={classes.Table}>
                            <thead>
                                <tr>
                                    <th>Delete</th>
                                    <th>Expenses</th>
                                    <th>Category</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ExpenseData />
                                <ExpenseData />
                                <ExpenseData />
                                <Add />
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default expenses;