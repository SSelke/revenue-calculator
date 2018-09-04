import React, {Component} from "react";
import {Grid, Row, Col} from 'react-bootstrap';
import classes from './Hours.css';

class Hours extends Component {
    render () {
        return (
            <div className={classes.Hours}>
                <Grid className={classes.Grid}>
                    <Row className={classes.Row}>
                        <Col className={classes.Col}>
                            <h1>Yearly Available Hours: 894</h1>
                        </Col>
                    </Row>
                    <Row className={classes.Row}>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Hours/Day:<input type="text" placeholder="8"/></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Days/Week:<input type="text" placeholder="5"/></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Billable:<input type="text" placeholder="75"/><span>%</span></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Vacation:<input type="text" placeholder="7"/></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Sick:<input type="text" placeholder="5"/></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Holidays:<input type="text" placeholder="10" className={classes.Placeholder}/></div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Hours;