import React, {Component} from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import TableData from './TableData/TableData';
import classes from './Revenue.css';

class Revenue extends Component {

    state = {
        revenueProjection: 0
    }

    handleRevenueProjection = (event) => {
        this.setState({revenueProjection: event.target.value}, () => {
            console.log(this.state.revenueProjection);
        });
    }

    render () {

        return (
            <div id='revenue' style={this.props.style} className={classes.Revenue}>
                <Grid>
                    <Row className={classes.row}>
                        <Col xs={12} sm={12}>
                            <div className={classes.Projection}>
                                <h3>Revenue Projection</h3>
                                <input type="number" value={this.state.revenueProjection} onChange={this.handleRevenueProjection}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Table striped className={classes.Table}>
                                <thead>
                                    <tr>
                                        <th>Product</th>
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
                        <Col xs={12}>
                            <Table striped className={classes.Table}>
                                <thead>
                                    <tr>
                                        <th>Package</th>
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