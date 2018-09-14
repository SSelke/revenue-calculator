import React, { Component } from 'react';
import classes from './Products.css';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';
import TableData from './TableData/TableData';

class Products extends Component {

    state = {
        oneTimeProducts: [
            { product: 'Authentication Setup', cost: 500, time: 0.25},
            { product: 'List Hygiene (100k)', cost: 1995, time: 2},
            { product: 'List Hygiene (200k)', cost: 2995, time: 3},
            { product: 'List Hygiene (300k)', cost: 3995, time: 3.5},
            { product: 'De-List', cost: 199, time: 0.25}
        ],
        retainerPackages: [
            { product: 'Silver', cost: 1000, time: 5 },
            { product: 'Gold', cost: 1997, time: 12 },
            { product: 'Silver', cost: 2995, time: 20 },
        ],
        totalRate: 0
    }

    addRowHandler = (container) => {
        const newRow = {
            product: 'New ' + container,
            cost: 0,
            time: 0
        }
        if (container === 'product') {
            const table = this.state.oneTimeProducts;
            table.push(newRow);
            this.setState({ oneTimeProducts: table });
        } else if (container === 'package') {
            const table = this.state.retainerClients;
            table.push(newRow);
            this.setState({ retainerClients: table });
        }
    }

    deleteProductHandler = (index) => {
        const productArray = [...this.state.oneTimeProducts];
        productArray.splice(index, 1);
        this.setState({ oneTimeProducts: productArray }, () => {
            this.updateTotalRate();
        });
    }

    deleteRetainerHandler = (index) => {
        const productArray = [...this.state.retainerPackages];
        productArray.splice(index, 1);
        this.setState({ retainerPackages: productArray }, () => {
            this.updateTotalRate();
        });
    }

    updateNameHandler = (event, index, type) => {

        let array = null;
        let row = null;

        if (type === 'product') {
            array = this.state.oneTimeProducts;
            row = array[index];
            row.product = event;
            this.setState({oneTimeProducts: array});
        } else if (type === 'package') {
            array = this.state.retainerPackages;
            row = array[index];
            row.product = event;
            this.setState({ retainerPackages: array });
        }
    }

    updateCostHandler = (event, index, type) => {
        let array = null;
        let row = null;

        if (type === 'product') {
            array = this.state.oneTimeProducts;
            row = array[index];
            row.cost = event;
            this.setState({ oneTimeProducts: array }, () => {
                this.updateTotalRate();
            });
        } else if (type === 'package') {
            array = this.state.retainerPackages;
            row = array[index];
            row.cost = event;
            this.setState({ retainerPackages: array }, () => {
                this.updateTotalRate();
            });
        }
    }

    updateTimeHandler = (event, index, type) => {
        let array = null;
        let row = null;

        if (type === 'product') {
            array = this.state.oneTimeProducts;
            row = array[index];
            row.time = event;
            this.setState({ oneTimeProducts: array }, () => {
                this.updateTotalRate();
            });
        } else if (type === 'package') {
            array = this.state.retainerPackages;
            row = array[index];
            row.time = event;
            this.setState({ retainerPackages: array }, () => {
                this.updateTotalRate();
            });
        }
    }

    updateTotalRate = () => {
        let totalRate = 0;
        let rate = 0;
        let count = 0;
        this.state.oneTimeProducts.map((item) => {
            rate += (item.cost / item.time);
            count++;
        });
        this.state.retainerPackages.map((item) => {
            rate += (item.cost / item.time);
            count++;
        });

        if ( rate > 0) {
            totalRate = rate / count;
        }
        this.setState({ totalRate: totalRate }, () => {
            this.props.updateRate(totalRate);
        });
    }

    render() {

        let totalPrice = 0;
        let totalTime = 0;
        let totalRate = 0;

        const products = this.state.oneTimeProducts.map((item, index) => {
            totalPrice += Number(item.cost);
            totalTime += Number(item.time);
            totalRate += (item.cost / item.time);
            return(
                <TableData name={item.product}
                           cost={item.cost}
                           time={item.time}
                           type='product'
                           index={index}
                           key={index}
                           delete={this.deleteProductHandler.bind(this)}
                           updateName={this.updateNameHandler.bind(this)}
                           updateCost={this.updateCostHandler.bind(this)}
                           updateTime={this.updateTimeHandler.bind(this)}/>
            );
        });

        totalRate = (totalRate / this.state.oneTimeProducts.length + 1);

        let totalPriceRev = 0;
        let totalTimeRev = 0;
        let totalRateRev = 0;

        const packages = this.state.retainerPackages.map((item, index) => {
            totalPriceRev += Number(item.cost);
            totalTimeRev += Number(item.time);
            totalRateRev += (item.cost / item.time);
            return (
                <TableData  name={item.product}
                            cost={item.cost}
                            time={item.time}
                            type='package'
                            index={index}
                            key={index}
                            delete={this.deleteRetainerHandler.bind(this)}
                            updateName={this.updateNameHandler.bind(this)}
                            updateCost={this.updateCostHandler.bind(this)}
                            updateTime={this.updateTimeHandler.bind(this)} />
            );
        });
        return (
            <div id="products" style={this.props.style} className={classes.Products}>
                <Grid>
                    <Row>
                        <Col className={classes.Header}>
                            <h1><strong>Products</strong></h1>
                            <p>Know which products you customers like most.</p>
                        </Col>
                    </Row>
                    <Row className={classes.row}>
                        <Col>
                            <h3><strong>One-Time Products</strong></h3>
                            <Table striped bordered className={classes.Table}>
                                <thead>
                                    <tr>
                                        <th>Delete</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products}
                                    <tr>
                                        <td>
                                            <Button style={{ width: '60px' }} bsStyle="success" bsSize="xsmall" onClick={() => this.addRowHandler('product')}>Add</Button>
                                        </td>
                                        <td>Total:</td>
                                        <td>${Math.ceil(totalPrice).toLocaleString()}</td>
                                        <td>{totalTime}</td>
                                        <td>${ totalRate ? Math.ceil(totalRate).toLocaleString() : 0}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row className={classes.row}>
                        <Col>
                            <h3><strong>Retainer Packages</strong></h3>
                            <Table striped bordered className={classes.Table}>
                                <thead>
                                    <tr>
                                        <th>Delete</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {packages}
                                    <tr>
                                        <td>
                                            <Button style={{ width: '60px' }} bsStyle="success" bsSize="xsmall" onClick={() => this.addRowHandler('product')}>Add</Button>
                                        </td>
                                        <td>Total:</td>
                                        <td>${Math.ceil(totalPriceRev).toLocaleString()}</td>
                                        <td>{totalTimeRev}</td>
                                        <td>${totalRateRev ? Math.ceil(totalRateRev).toLocaleString() : 0}</td>
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


export default Products;