import React, {Component} from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Model from '../../../../containers/Model/Model';                              
import TableData from './TableData/TableData';
import Add from './TableData/Add/Add';
import classes from './Revenue.css';

class Revenue extends Component {

    state = {
        revenueProjection: 250000,
        one_time_products_value: 187500,
        retainer_packages_value: 62500,
        products_percentage: 75,
        retainer_percentage: 25,
        oneTimeProducts: [
            {product: 'Authentication Setup', percentage: 35, cost: '500'},
            {product: 'List Hygiene 100K', percentage: 25, cost: '1995'},
            { product: 'List Hygiene 300K', percentage: 10, cost: '3995'},
            { product: 'De-Listing', percentage: 30, cost: '199'},
        ],
        retainerClients: [
            { product: 'Silver', percentage: 35, cost: '1000'},
            { product: 'Gold', percentage: 45, cost: '1997'},
            { product: 'Platinum', percentage: 20, cost: '2995'}
        ],
        showModel: false
    }

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

    showRow = () => {
        this.setState({showModel: true}, () => {
            console.log('hello');
        });
    }

    addRowHandler = () => {

    }

    render () {
        // Total amount needed Revenue/Percentage
        const one_time_products = Math.ceil((this.state.products_percentage / 100) * this.state.revenueProjection);
        const retainerPackages = Math.ceil((this.state.retainer_percentage / 100) * this.state.revenueProjection);

        //LOGIC FOR <TABLE></TABLE>
        let totalPerYear = 0;
        let totalPerMonth = 0;
        let amountSoldPerMonth = 0;
        let amountSoldPerYear = 0;

        const products = this.state.oneTimeProducts.map((item, index) => {
            const months = Math.ceil((((item.percentage / 100) * one_time_products) / 12) / item.cost);
            const amountPerMonth = months * item.cost;
            const amountPerYear = months * 12;
            const revenuePerYear = item.cost * amountPerYear;
            totalPerYear += revenuePerYear;
            totalPerMonth += amountPerMonth;
            amountSoldPerMonth += months;
            amountSoldPerYear += amountPerYear;
            return (
                <TableData key={index}
                           name={item.product} 
                           percentage={item.percentage} 
                           cost={item.cost} 
                           months={months}
                           amountPerMonth={amountPerMonth}
                           amountPerYear={amountPerYear}
                           revenuePerYear={revenuePerYear} />
            );
        });
        
        //LOGIC FOR <TABLE></TABLE>
        let totalPerYearRev = 0;
        let totalPerMonthRev = 0;
        let amountSoldPerMonthRev = 0;
        let amountSoldPerYearRev = 0;

        const packages = this.state.retainerClients.map((item, index) => {
            const months = Math.ceil((((item.percentage / 100) * retainerPackages) / 12) / item.cost);
            const amountPerMonth = months * item.cost;
            const amountPerYear = months * 12;
            const revenuePerYear = item.cost * amountPerYear;
            totalPerYearRev += revenuePerYear;
            totalPerMonthRev += amountPerMonth;
            amountSoldPerMonthRev += months;
            amountSoldPerYearRev += amountPerYear;
            return (
                <TableData key={index}
                    name={item.product}
                    percentage={item.percentage}
                    cost={item.cost}
                    months={months}
                    amountPerMonth={amountPerMonth}
                    amountPerYear={amountPerYear}
                    revenuePerYear={revenuePerYear} />              
            );
        });

        return (
            <div id='revenue' style={this.props.style} className={classes.Revenue}>
                <Model visible={this.state.showModel}/>
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
                                        <th colSpan="2">Month</th>
                                        <th colSpan="2">Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products}
                                    <tr>
                                        <Add />
                                        <td colSpan={3} style={{textAlign: 'right', paddingRight: '30px'}}>Totals:</td>
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
                                        <th colSpan="2">Month</th>
                                        <th colSpan="2">Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {packages}
                                    <tr>
                                        <Add />
                                        <td colSpan={3} style={{ textAlign: 'right', paddingRight: '30px' }}>Totals:</td>
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

 
// <Col xs={12} sm={6}>
//     <div className={classes.Membership}>
//         <h3>Membership</h3>
//         <table className={classes.MemberTable}>
//             <tbody>
//                 <tr>
//                     <td><input type="text" /></td>
//                     <td><input type="text" /></td>
//                     <td><input type="text" /></td>
//                     <td><input type="text" /></td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
// </Col>

export default Revenue;