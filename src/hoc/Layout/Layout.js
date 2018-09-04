import React, {Component, Fragment} from 'react';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import Hours from '../../components/Hours/Hours';
import classes from './Layout.css';

class Layout extends Component {

    state = {
       
    }

    render () {

        return (
            <Fragment>
                <NavigationItems numbers={this.props.numbers}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;