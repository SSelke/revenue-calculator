import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Calculator from './containers/Calculator/Calculator';
import classes from './App.css';

class App extends Component {

  state = {
    numbers: {
      profit: 216000,
      revenue: 400000,
      expenses: 80000,
      rate: 4
    }
  }

  render() {
    return (
      <div className={classes.App}>
        <Layout numbers={this.state.numbers}>
            <Calculator />
        </Layout>
      </div>
    );
  }
}

export default App;
