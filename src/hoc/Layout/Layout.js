import React, {Component, Fragment} from 'react';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import classes from './Layout.css';

class Layout extends Component {

    render () {
        return (
            <Fragment>
                <NavigationItems profit={this.props.profit} revenue={this.props.revenue} expenses={this.props.expenses} rate={this.props.rate}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;