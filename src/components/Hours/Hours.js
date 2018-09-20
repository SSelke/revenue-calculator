import React, {Component} from "react";
import {Grid, Row, Col} from 'react-bootstrap';
import classes from './Hours.css';

class Hours extends Component {
    state = {
        totalHours: 1128,
        hoursPerDay: 6,
        daysPerWeek: 4,
        billable: 75,
        vacation: 5,
        sick: 5,
        holidays: 10
    }

    updateHours = (evt) => {
         if (evt.target.value < 0) {
            return;
         }
         console.log(evt.target.value);
        this.setState({ hoursPerDay: evt.target.value }, () => {
            this.updateTotalHours();
        });
    }
    updateDays = (evt) => {
        if (evt.target.value < 0) {
            return;
        }
        console.log(evt.target.value);
        this.setState({ daysPerWeek: evt.target.value }, () => {
            this.updateTotalHours();
        });
    }
    updateBillable = (evt) => {
        if (evt.target.value < 0) {
            return;
        }
        console.log(evt.target.value);
        this.setState({ billable: evt.target.value }, () => {
            this.updateTotalHours();
        });
    }
    updateVacation = (evt) => {
        if (evt.target.value < 0) {
            return;
        }
        console.log(evt.target.value);
        this.setState({ vacation: evt.target.value }, () => {
            this.updateTotalHours();
        });
    }
    updateSick = (evt) => {
        if (evt.target.value < 0) {
            return;
        }
        console.log(evt.target.value);
        this.setState({ sick: evt.target.value }, () => {
            this.updateTotalHours();
        });
    }
    updateHolidays = (evt) => {
        if (evt.target.value < 0) {
            return;
        }
        console.log(evt.target.value);
        this.setState({ holidays: evt.target.value }, () => {
            this.updateTotalHours();
        });
    }

    updateTotalHours = () => {
        let totalHours = 0;
        let hours = this.state.hoursPerDay;
        let days = this.state.daysPerWeek;
        let billable = this.state.billable;
        let vacation = this.state.vacation * hours;
        let holiday = this.state.holidays * hours;
        let sick = this.state.sick * hours;

        totalHours = (((hours * days) * 52) - vacation - holiday - sick);

        this.setState({totalHours: totalHours});
    }

    render () {
        return (
            <div className={classes.Hours}>
                <Grid className={classes.Grid}>
                    <Row className={classes.Row}>
                        <Col className={classes.Col}>
                            <h1>Yearly Available Hours: {this.state.totalHours}</h1>
                        </Col>
                    </Row>
                    <Row className={classes.Row}>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Hours/Day:<input type="number" value={this.state.hoursPerDay} onChange={evt => this.updateHours(evt)}/></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Days/Week:<input type="number" value={this.state.daysPerWeek} onChange={evt => this.updateDays(evt)}/></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Billable:<input type="number" value={this.state.billable}  onChange={evt => this.updateBillable(evt)}/><span>%</span></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Vacation:<input type="number" value={this.state.vacation} onChange={evt => this.updateVacation(evt)}/></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Sick:<input type="number" value={this.state.sick} onChange={evt => this.updateSick(evt)}/></div>
                        </Col>
                        <Col xs={6} md={4} className={classes.Col}>
                            <div>Holidays:<input type="number" value={this.state.holidays}  className={classes.Placeholder} onChange={evt => this.updateHolidays(evt)}/></div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Hours;