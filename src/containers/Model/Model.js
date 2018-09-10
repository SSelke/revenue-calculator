import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import classes from './Model.css';

class Model extends Component {

    state = {
        name: this.props.row[0] ? this.props.row[0].product : "",
        price: this.props.row[0] ? this.props.row[0].cost : 0,
        percentage: this.props.row[0] ? this.props.row[0].percentage : 0
    }

    nameChange = (event) => {
        this.setState({name: event.target.value});
    }

    priceChange = (event) => {
        if (event.target.value < 0) {
            return;
        }
        this.setState({ price: event.target.value });
    }

    percentChange = (event) => {
        if (event.target.value < 0) {
            return;
        }
        this.setState({ percentage: event.target.value });
    }

    render () {
        const style = {
            display: this.props.visible ? 'block' : 'none'
        };

        return (
            <div style={style} className={classes.Model} >
                <div>
                    <h3>Product: {this.state.name}</h3>
                    <input type="text" placeholder={this.state.name} value={this.state.product} onChange={this.nameChange} />
                </div>
                <div>
                    <h3>Price: ${this.state.price}</h3>
                    <input type="number" value={this.state.price} onChange={this.priceChange} />
                </div>
                <div>
                    <h3>Percentage: {this.state.percentage}%</h3>
                    <input type="number" onChange={this.percentChange} value={this.state.percentage} />
                </div>
                <Button className={classes.Button} onClick={this.props.clicked} bsStyle="success" bsSize="xsmall">Submit</Button>
            </div>
        );
    }
}

export default Model;