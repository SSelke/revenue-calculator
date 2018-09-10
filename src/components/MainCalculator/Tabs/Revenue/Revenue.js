import React, {Component} from 'react';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';                             
import TableData from './TableData/TableData';
import classes from './Revenue.css';

class Revenue extends Component {

    state = {
        revenueProjection: 250000,
        one_time_products_value: 187500,
        retainer_packages_value: 62500,
        products_percentage: 75,
        retainer_percentage: 25,
        oneTimeProducts: [
            { product: 'Authentication Setup', percentage: 35, cost: 500},
            { product: 'List Hygiene 100K', percentage: 25, cost: 1995},
            { product: 'List Hygiene 300K', percentage: 10, cost: 3995},
            { product: 'De-Listing', percentage: 30, cost: 199},
        ],
        retainerClients: [
            { product: 'Silver', percentage: 35, cost: 1000},
            { product: 'Gold', percentage: 45, cost: 1997},
            { product: 'Platinum', percentage: 20, cost: 2995}
        ]
    }

    // HANDLE REVENUE PROJECTION AND PERCENTAGE UPDATE
    handleRevenueProjection = (event) => {
        if (event.target.value < 0) {
            return;
        }
        this.setState({ revenueProjection: event.target.value}, () => {
            console.log(this.state.revenueProjection);
        });
    }

    productPercentageHandler = (event) => {
        if (event.target.value > 100 || event.target.value < 0) {
            return;
        }
        this.setState({ products_percentage: event.target.value }, () => {
            this.revenuePercentageHandler('product');
        });
    }

    retainerPercentageHandler = (event) => {
        if (event.target.value > 100 || event.target.value < 0) {
            return;
        }
        this.setState({ retainer_percentage: event.target.value }, () => {
            this.revenuePercentageHandler('retainer');
        });
    }

    revenuePercentageHandler = (change) => {
        let number = null;
        let newNumber = 100;
        switch(change) {
            case 'product':
                number = this.state.products_percentage;
                newNumber -= number;
                this.setState({ retainer_percentage: newNumber });
                break;
            case 'retainer':
                number = this.state.retainer_percentage;
                newNumber -= number;
                this.setState({ products_percentage: newNumber });
                break;
        }
    }

    // HANDLE DELETION AND EDITING OF DATA ROWS
    addRowHandler = (container) => {
        const newRow = {
            product: 'New ' + container,
            percentage: 0,
            cost: "0"
        }
        console.log(container);
        if (container === 'product') {
            const table = this.state.oneTimeProducts;
            table.push(newRow);
            this.setState({oneTimeProducts: table});
        } else if (container === 'package') {
            const table = this.state.retainerClients;
            table.push(newRow);
            this.setState({ retainerClients: table });
        }
    }

    deleteProductHandler = (index) => {
        const productArray = [...this.state.oneTimeProducts];
        productArray.splice(index, 1);
        console.log(productArray);
        this.setState({oneTimeProducts: productArray}, () => {
            console.log(this.state.oneTimeProducts);
        });
    }

    deleteRetainerHandler = (index) => {
        const productArray = this.state.retainerClients;
        productArray.splice(index, 1);
        this.setState({retainerClients: productArray});
    }

    // UPDATE PRODUCTS ROW

    productUpdate = (event, index) => {
        const products = this.state.oneTimeProducts;
        const row = products[index];
        row.product = event;
        this.setState({ oneTimeProducts: products });
    }

    updateCost = (event, index) => {
        if (event < 0) {
            return;
        }
        if (event === '') {
            event = 0;
        }
        const products = this.state.oneTimeProducts;
        const row = products[index];
        row.cost = Number(event);
        this.setState({ oneTimeProducts: products });
    }

    percentageUpdate = (event, index) => {
        if (event < 0) {
            return;
        }
        if (event === '') {
            event = 0;
        }
        const products = this.state.oneTimeProducts;
        const row = products[index];
        row.percentage = Number(event);
        this.setState({ oneTimeProducts: products });
    }

    // UPDATE RETAINER Row
    retainerUpdate = (event, index) => {
        const products = this.state.retainerClients;
        const row = products[index];
        row.product = event;
        this.setState({ retainerClients: products });
    }

    updateRetainerCost = (event, index) => {
        if (event < 0) {
            return;
        }
        if (event === '') {
            event = 0;
        }
        const products = this.state.retainerClients;
        const row = products[index];
        row.cost = Number(event);
        this.setState({ retainerClients: products });
    }

    percentageRetainerUpdate = (event, index) => {
        if (event < 0) {
            return;
        }
        if (event === '') {
            event = 0;
        }
        const products = this.state.retainerClients;
        const row = products[index];
        row.percentage = Number(event);
        this.setState({ retainerClients: products });
    }


    render () {
        // Total amount needed Revenue/Percentage
        const one_time_products = Math.ceil((this.state.products_percentage / 100) * this.state.revenueProjection);
        const retainerPackages = Math.ceil((this.state.retainer_percentage / 100) * this.state.revenueProjection);


        let totalPerYear = 0;
        let totalPerMonth = 0;
        let amountSoldPerMonth = 0;
        let amountSoldPerYear = 0;
        let totalPercentage = 0;

        const products = this.state.oneTimeProducts.map((item, index) => {
            let months = 0;
            let amountPerMonth = 0;
            let amountPerYear = 0;
            let revenuePerYear = 0;
            if (item.cost !== 0 && item.percentage !== 0) {
                months = Math.ceil((((item.percentage / 100) * one_time_products) / 12) / item.cost);
                amountPerMonth = months * item.cost;
                amountPerYear = months * 12;
                revenuePerYear = item.cost * (months * 12);
                totalPerYear += revenuePerYear;
                totalPerMonth += amountPerMonth;
                amountSoldPerMonth += months;
                amountSoldPerYear += amountPerYear;
                totalPercentage += item.percentage;
            }
            return (
                <TableData key={index}
                           index={index}
                           delete={this.deleteProductHandler.bind(this)}
                           productUpdate={this.productUpdate.bind(this)}
                           updateCost={this.updateCost.bind(this)}
                           percentageUpdate={this.percentageUpdate.bind(this)}
                           name={item.product} 
                           cost={item.cost}
                           percentage={item.percentage} 
                           months={months}
                           amountPerMonth={amountPerMonth}
                           amountPerYear={amountPerYear}
                           revenuePerYear={revenuePerYear}
                           />
            );
        });
        
        //LOGIC FOR <TABLE></TABLE>


        let totalPerYearRev = 0;
        let totalPerMonthRev = 0;
        let amountSoldPerMonthRev = 0;
        let amountSoldPerYearRev = 0;
        let totalPercentageRev = 0;

        const packages = this.state.retainerClients.map((item, index) => {
            let months = 0;
            let amountPerMonth = 0;
            let amountPerYear = 0;
            let revenuePerYear = 0;
            if (item.cost !== 0 && item.percentage !== 0) {
                months = Math.ceil((((item.percentage / 100) * retainerPackages) / 12) / item.cost);
                amountPerMonth = months * item.cost;
                amountPerYear = months * 12;
                revenuePerYear = item.cost * (months * 12);
                totalPerYearRev += revenuePerYear;
                totalPerMonthRev += amountPerMonth;
                amountSoldPerMonthRev += months;
                amountSoldPerYearRev += amountPerYear;
                totalPercentageRev += item.percentage;
            }
            return (
                <TableData  key={index}
                            index={index}
                            delete={this.deleteRetainerHandler.bind(this)}
                            productUpdate={this.retainerUpdate.bind(this)}
                            updateCost={this.updateRetainerCost.bind(this)}
                            percentageUpdate={this.percentageRetainerUpdate.bind(this)}
                            name={item.product}
                            cost={item.cost}
                            percentage={item.percentage}
                            months={months}
                            amountPerMonth={amountPerMonth}
                            amountPerYear={amountPerYear}
                            revenuePerYear={revenuePerYear}
                />
            );
        });

        return (
            <div id='revenue' style={this.props.style} className={classes.Revenue}>
                <Grid>
                    <Row>
                        <Col className={classes.col} xs={12} sm={12}>
                            <div className={classes.Projection}>
                                <h1>Revenue Projection:</h1>
                                <span>$</span><input type="number" value={this.state.revenueProjection} onChange={this.handleRevenueProjection}/>
                            </div>
                        </Col>
                    </Row>
                    <Row className={classes.row}>
                        <Col className={classes.col} style={{margin: 0}}  xs={12}>
                            <div className={classes.Percentage}>
                                <input type="number" onChange={this.productPercentageHandler} value={this.state.products_percentage}/> %
                                <span className={classes.Title}>One-Time Products</span>
                            </div>
                            <span className={classes.OneTime}>${one_time_products.toLocaleString()}</span>
                            <Table striped className={classes.Table}>
                                <thead>
                                    <tr>
                                        <th>Delete</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>%</th>
                                        <th>Amount/Mo</th>
                                        <th>Total/Mo</th>
                                        <th>Amount/Year</th>
                                        <th>Total/Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products}
                                    <tr>
                                        <td style={{ margin: '0 auto' }}>
                                            <Button style={{ width: '60px' }} bsStyle="success" bsSize="xsmall" onClick={() => this.addRowHandler('product')}>Add</Button>
                                        </td>
                                        <td colSpan={2} style={{paddingRight: '30px'}}>Totals:</td>
                                        <td>{totalPercentage}%</td>
                                        <td>{amountSoldPerMonth}</td>
                                        <td>${totalPerMonth.toLocaleString()}</td>
                                        <td>{amountSoldPerYear}</td>
                                        <td>${totalPerYear.toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col className={classes.col} xs={12}>
                            <div className={classes.Percentage}>
                                <input type="number" onChange={this.retainerPercentageHandler} value={this.state.retainer_percentage} /> %
                                <span>Retainer Packages</span>
                            </div>
                            <span className={classes.OneTime}>${retainerPackages.toLocaleString()}</span>
                            <Table striped className={classes.Table}>
                                <thead>
                                    <tr>
                                        <th>Delete</th>
                                        <th>Package</th>
                                        <th>Price</th>
                                        <th>%</th>
                                        <th>Amount/Mo</th>
                                        <th>Total/Mo</th>
                                        <th>Amount/Year</th>
                                        <th>Total/Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {packages}
                                    <tr>
                                        <td style={{ margin: '0 auto' }}>
                                            <Button style={{ width: '60px' }} bsStyle="success" bsSize="xsmall" onClick={() => this.addRowHandler('package')}>Add</Button>
                                        </td>
                                        <td colSpan={2} style={{paddingRight: '30px' }}>Totals:</td>
                                        <td>{totalPercentageRev}%</td>
                                        <td>{amountSoldPerMonthRev}</td>
                                        <td>${totalPerMonthRev.toLocaleString()}</td>
                                        <td>{amountSoldPerYearRev}</td>
                                        <td>${totalPerYearRev.toLocaleString()}</td>
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

export default Revenue;