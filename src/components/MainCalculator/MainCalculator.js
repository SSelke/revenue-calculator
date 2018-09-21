import React, {Component} from 'react';
import Revenue from './Tabs/Revenue/Revenue';
import Expenses from './Tabs/Expenses/Expenses';
import Products from './Tabs/Products/Products';
import Hours from './Tabs/Hours/Hours';
import classes from './MainCalculator.css';

class MainCalculator extends Component {

    state = {
        visible: 'products',
        oneTimeProducts: [
            { product: 'Authentication Setup', percentage: 35, cost: 500, time: 0.25 },
            { product: 'List Hygiene 100K', percentage: 25, cost: 1995, time: 0.25 },
            { product: 'List Hygiene 300K', percentage: 10, cost: 3995, time: 0.25 },
            { product: 'De-Listing', percentage: 30, cost: 199, time: 0.25 },
        ],
        retainerClients: [
            { product: 'Silver', percentage: 35, cost: 1000, time: 0.25 },
            { product: 'Gold', percentage: 45, cost: 1997, time: 0.25 },
            { product: 'Platinum', percentage: 20, cost: 2995, time: 0.25 }
        ]
    }

    //toggle visibility for the calc pages
    navClickedHandler = (i) => { 
        var element = null;
        switch(i) {
            case 'r': 
                element = document.getElementById('revenue');
                if(element.style.display === 'none') {
                    element.style.display = 'block';
                    document.getElementById(this.state.visible).style.display = 'none';
                    this.setState({visible: 'revenue'});
                }
                break;
            case 'e':
                element = document.getElementById('expenses');
                if (element.style.display === 'none') {
                    element.style.display = 'block';
                    document.getElementById(this.state.visible).style.display = 'none';
                    this.setState({ visible: 'expenses' });
                }
                break;
            case 'p':
                element = document.getElementById('products');
                if (element.style.display === 'none') {
                    element.style.display = 'block';
                    document.getElementById(this.state.visible).style.display = 'none';
                    this.setState({ visible: 'products' });
                }
                break;
            case 'h':
                element = document.getElementById('hours');
                if (element.style.display === 'none') {
                    element.style.display = 'block';
                    document.getElementById(this.state.visible).style.display = 'none';
                    this.setState({ visible: 'hours' });
                }
                break;
            default:
                break;
        }
    }

    render () {

        const style = {
            display: 'none'
        }

        return (
            <div className={classes.MainContainer}>
                <ul className={classes.List}>
                    <li><button onClick={() => this.navClickedHandler("p")}>Products</button></li>
                    <li><button onClick={() => this.navClickedHandler("e")}>Expenses</button></li>
                    <li><button onClick={() => this.navClickedHandler("r")}>Revenue</button></li>
                    <li><button onClick={() => this.navClickedHandler("h")}>Hours</button></li>
                </ul>
                <div>
                    <Products updateRate={(total) => this.props.updateRate(total)}/>
                    <Expenses style={style} updateExpenses={(total) => this.props.updateExpenses(total)}/>
                    <Revenue style={style} updateRevenue={(total) => this.props.updateRevenue(total)}/>
                    <Hours style={style}/>
                </div>
            </div>
        );
    }
}
export default MainCalculator;