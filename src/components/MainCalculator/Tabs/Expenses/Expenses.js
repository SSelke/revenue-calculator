import React, {Component} from 'react';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';
import ExpenseData from './ExpenseData/ExpenseData';
import classes from './Expenses.css';

class Expenses extends Component {

    state = {
        expenses: [
            {name: 'Office', category: 'Rent', amount: 1200 },
            {name: 'ATT', category: 'Telecom', amount: 433 },
            {name: 'Accountant', category: 'Taxes', amount: 1000 }
        ],
        totalExpenses: 0
    }

    componentWillMount = () => {
        let totalExpenses = 0;
        this.state.expenses.map((item) => {
            totalExpenses += item.amount;
        });

        totalExpenses = totalExpenses * 12;

        this.setState({ totalExpenses: totalExpenses }, (totalExpenses) => {
            this.props.updateExpenses(totalExpenses);
        });
    }

    addRowHandler = () => {
        const newRow = {
            name: "New Expense",
            category: "N/A",
            amount: 0
        }
        const array = [...this.state.expenses];
        array.push(newRow);
        this.setState({expenses: array});
        
    }

    deleteRowHandler = (index) => {
        const array = [...this.state.expenses];
        array.splice(index, 1);
        this.setState({expenses: array});
    }

    updateNameHandler = (event, index) => {
        const array = this.state.expenses;
        const row = array[index];
        row.name = event;
        this.setState({ expenses: array });
    }

    updateCategoryHandler = (event, index) => {
        const array = this.state.expenses;
        const row = array[index];
        row.category = event;
        this.setState({ expenses: array});
    }

    updateAmountHandler = (event, index) => {
        if (event < 0) {
            return;
        }
        if (event === '') {
            event = 0;
        }
        const array = this.state.expenses;
        const row = array[index];
        row.amount = Number(event);
        this.setState({ expenses: array }, () => {
            this.updateTotalExpenses();
        });
    }

    updateTotalExpenses = () => {
        let totalExpenses = 0;
        this.state.expenses.map((item) => {
            totalExpenses += item.amount;
        });
        totalExpenses = totalExpenses * 12;
        this.setState({ totalExpenses: totalExpenses }, () => {
            this.props.updateExpenses(totalExpenses);
        });
    }

    render () {

        const expenseData = this.state.expenses.map((item, index) => {
            return (
                <ExpenseData key={index}
                             index={index}
                             name={item.name}
                             amount={item.amount}
                             category={item.category}
                             delete={this.deleteRowHandler.bind(this)}
                             updateName={this.updateNameHandler.bind(this)}
                             updateCategory={this.updateCategoryHandler.bind(this)}
                             updateAmount={this.updateAmountHandler.bind(this)}/>
            );
        });
        return (
            <div id="expenses" style={this.props.style} className={classes.Expenses}>
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
                                    {expenseData}
                                    <tr style={{background: 'none'}}>
                                        <td>
                                            <Button bsSize='xsmall' bsStyle="success" style={{padding: 'auto'}} onClick={this.addRowHandler}>Add</Button>
                                        </td>
                                        <td colSpan={2}></td>
                                        <td>
                                            <div>Total (Month) <span>${(this.state.totalExpenses).toLocaleString()}</span></div>
                                            <div>Total (Year) <span>${(this.state.totalExpenses * 12).toLocaleString()}</span></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Expenses;