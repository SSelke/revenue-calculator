import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Calculator from './containers/Calculator/Calculator';
import classes from './App.css';

class App extends Component {

  state = {
      expense: 31596,
      profit: 218404,
      revenue: 250000,
      rate: 807

  }

  updateRevenue = (total) => {
    this.setState({ revenue: total }, () => {
      this.updateProfit();
    });
  }

  updateExpenses = (total) => {
    this.setState({ expense: total }, () => {
      this.updateProfit();
    });
  }

  updateRate = (total) => {
    this.setState({rate: Math.ceil(total)});
  }

  updateProfit = () => {
    const revenue = this.state.revenue;
    const expenses = this.state.expense;
    const totalProfit = revenue - expenses;
    this.setState({ profit: totalProfit});
  }

  render() {
    return (
      <div className={classes.App}>
        <Layout profit={this.state.profit} revenue={this.state.revenue} expenses={this.state.expense} rate={this.state.rate}>
          <Calculator updateRevenue={(total) => this.updateRevenue(total)} 
                      updateExpenses={(total) => this.updateExpenses(total)} 
                      updateRate={(total) => this.updateRate(total)}/>
        </Layout>
      </div>
    );
  }
}

export default App;
