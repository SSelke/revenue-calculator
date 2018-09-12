import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Calculator from './containers/Calculator/Calculator';
import classes from './App.css';

class App extends Component {

  state = {
      profit: 216000,
      revenue: 400000,
      expenses: 379152,
      rate: 807

  }

  updateRevenue = (total) => {
    this.setState({ revenue: total });
  }

  updateExpenses = (total) => {
    this.setState({expenses: total * 12});
  }

  updateRate = (total) => {
    this.setState({rate: Math.ceil(total)});
  }

  render() {
    return (
      <div className={classes.App}>
        <Layout profit={this.state.profit} revenue={this.state.revenue} expenses={this.state.expenses} rate={this.state.rate}>
          <Calculator updateRevenue={(total) => this.updateRevenue(total)} 
                      updateExpenses={(total) => this.updateExpenses(total)} 
                      updateRate={(total) => this.updateRate(total)}/>
        </Layout>
      </div>
    );
  }
}

export default App;
