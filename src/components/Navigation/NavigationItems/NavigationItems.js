import React, {Component} from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

class NavigationItems extends Component {

    state = {
        sticky: null
    }
    // updateDimensions = () => {
    //     if (window.pageYOffset > this.state.sticky) {
    //         const element = document.getElementById('navs');
    //         const sticky = element.offsetTop;
    //         console.log(sticky);
    //         this.setState({ sticky: sticky });
    //     }
    // }
    scrollHandler = () => {
        const element = document.getElementById('navs');
        if (window.pageYOffset > this.state.sticky && document.documentElement.clientWidth < 800) {
            element.classList.add("NavigationItems__sticky__jlVDr");
        } else {
            element.classList.remove("NavigationItems__sticky__jlVDr");
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
            <div className={classes.NavigationItems} id='navs'>
                <span></span>
                <NavigationItem dataType='Profit' value={this.props.profit} />
                <NavigationItem dataType='Revenue' value={this.props.revenue} />
                <NavigationItem dataType='Expenses' value={this.props.expenses >= 0 ? this.props.expenses : 31596} />
                <NavigationItem dataType='Rate' value={this.props.rate} />
                <span></span>
            </div>
        );
    }

}

export default NavigationItems;