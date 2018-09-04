import React, {Component} from 'react';
import Revenue from './Tabs/Revenue/Revenue';
import Expenses from './Tabs/Expenses/Expenses';
import Products from './Tabs/Products/Products';
import classes from './MainCalculator.css';

class MainCalculator extends Component {

    state = {
        visible: 'revenue'
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
                    <li><button onClick={() => this.navClickedHandler("r")}>Revenue</button></li>
                    <li><button onClick={() => this.navClickedHandler("e")}>Expenses</button></li>
                    <li><button onClick={() => this.navClickedHandler("p")}>Products</button></li>
                </ul>
                <div>
                    <Revenue />
                    <Expenses style={style}/>
                    <Products style={style}/>
                </div>
            </div>
        );
    }
}
export default MainCalculator;