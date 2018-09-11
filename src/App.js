import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Calculator from './containers/Calculator/Calculator';
import classes from './App.css';

class App extends Component {

  state = {
      profit: 216000,
      revenue: 400000,
      expenses: 379152,
      rate: 4

  }

  updateExpenses = (total) => {
    this.setState({expenses: total * 12});
  }

  render() {
    return (
      <div className={classes.App}>
        <Layout profit={this.state.profit} revenue={this.state.revenue} expenses={this.state.expenses} rate={this.state.rate}>
            <Calculator updateExpenses={(total) => this.updateExpenses(total)}/>
        </Layout>
      </div>
    );
  }
}

export default App;
