import React, {Component, Fragment} from 'react';
import MainCalculator from '../../components/MainCalculator/MainCalculator';
import Hours from '../../components/Hours/Hours';
import classes from './Calculator.css';

class Calculator extends Component {

    render () {
        return (
            <div className={classes.calculator}> 
                <MainCalculator updateRevenue={(total) => this.props.updateRevenue(total)}
                                updateExpenses={(total) => this.props.updateExpenses(total)}
                                updateRate={(total) => this.props.updateRate(total)}/>
                <Hours />
            </div>
        );
    }
}

export default Calculator;