import React, {Component, Fragment} from 'react';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import Header from '../../components/Navigation/Header/Header';
import classes from './Layout.css';

class Layout extends Component {

    state = {
        sticky: null
    }

    scrollHandler = () => {
        console.log(this.state.sticky);
        const element = document.getElementById('main');
        if (window.pageYOffset > this.state.sticky) {
            element.style.paddingTop = "170px";
        } else {
            element.style.paddingTop = "0";
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener("resize", this.updateDimensions);
        const element = document.getElementById('navs');
        const sticky = element.offsetTop;
        this.setState({ sticky: sticky });
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener("resize", this.updateDimensions);
    }

    render () {
        return (
            <Fragment>
                <Header />
                <NavigationItems profit={this.props.profit} revenue={this.props.revenue} expenses={this.props.expenses} rate={this.props.rate}/>
                <main className={classes.Content} id="main">
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;