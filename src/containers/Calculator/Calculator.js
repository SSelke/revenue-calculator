import React, {Component, Fragment} from 'react';
import MainCalculator from '../../components/MainCalculator/MainCalculator';
import Hours from '../../components/Hours/Hours';
import classes from './Calculator.css';

class Calculator extends Component {

    state = {
        numbers: {
            profit: 216000,
            revenue: 400000,
            expenses: 80000,
            rate: 4
        }
    }

    render () {
        return (
            <div className={classes.calculator}> 
                <MainCalculator />
                <Hours />
            </div>
        );
    }
}

export default Calculator;