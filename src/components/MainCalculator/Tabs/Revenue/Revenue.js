import React, {Component} from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
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
            {product: 'Authentication Setup', percentage: 35},
            {product: 'List Hygiene 100K', percentage: 25},
            {product: 'List Hygiene 300K', percentage: 10},
            {product: 'De-Listing', percentage: 30},
        ],
        retainerClients: [
            {product: 'Silver', percentage: 35},
            {product: 'Gold', percentage: 45},
            {product: 'Platinum', percentage: 20}
        ]
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

    render () {

        const one_time_products = Math.ceil((this.state.products_percentage/ 100) * this.state.revenueProjection);
        const retainerPackages = Math.ceil((this.state.retainer_percentage / 100) * this.state.revenueProjection);

        return (
            <div id='revenue' style={this.props.style} className={classes.Revenue}>
                <Grid>
                    <Row>
                        <Col className={classes.col} xs={12} sm={12}>
                            <div className={classes.Projection}>
                                <h3>Revenue Projection</h3>
                                <input type="number" value={this.state.revenueProjection} onChange={this.handleRevenueProjection}/>
                            </div>
                        </Col>
                    </Row>
                    <Row className={classes.row}>
                        <Col className={classes.col}  xs={12}>
                            <div className={classes.Percentage}>
                                <input type="number" onChange={this.productPercentageHandler} value={this.state.products_percentage}/>
                                <span>One-Time Products</span>
                                <span>${one_time_products}</span>
                            </div>
                            <Table striped className={classes.Table}>
                                <thead>
                                    <tr>
                                        <th colSpan="2">Product</th>
                                        <th>%</th>
                                        <th colSpan="2">Month</th>
                                        <th colSpan="2">Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableData />
                                    <TableData />
                                    <TableData />
                                </tbody>
                            </Table>
                        </Col>
                        <Col className={classes.col} xs={12}>
                            <div className={classes.Percentage}>
                                <input type="number" onChange={this.retainerPercentageHandler} value={this.state.retainer_percentage} />
                                <span>Retainer Packages</span>
                                <span>${retainerPackages}</span>
                            </div>
                            <Table striped className={classes.Table}>
                                <thead>
                                    <tr>
                                        <th colSpan="2">Package</th>
                                        <th>%</th>
                                        <th colSpan="2">Month</th>
                                        <th colSpan="2">Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableData />
                                    <TableData />
                                    <TableData />
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