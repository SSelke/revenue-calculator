import React, {Component} from "react";
import {Grid, Row, Col} from 'react-bootstrap';
import classes from './Hours.css';

class Hours extends Component {
    state = {
        hoursPerDay: 0,
        daysPerWeek: 0,
        bill: 0,
        vacation: 0,
        sick: 0,
        holidays: 0
    }

    updateHours = (event, item) => {
        switch(item) {
            case 'h/d':
            this.setState({hoursPerDay: event.target.value});
            break;
        }
    }
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
                            <div>Hours/Day:<input type="text" value={this.state.hoursPerDay} onChange={() => this.updateHours('h/d')}/></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Days/Week:<input type="text" placeholder="5" onChange={this.updateHours('d/w')}/></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Billable:<input type="text" placeholder="75" onChange={this.updateHours('billable')}/><span>%</span></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Vacation:<input type="text" placeholder="7" onChange={this.updateHours('vacation')}/></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Sick:<input type="text" placeholder="5" onChange={this.updateHours('sick')}/></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Holidays:<input type="text" placeholder="10" className={classes.Placeholder} onChange={this.updateHours('holidays')}/></div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Hours;