import React, {Component} from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

class NavigationItems extends Component {

    state = {
        sticky: null
    }
    
    scrollHandler = () => {
        const element = document.getElementById('navs');
        if (window.pageYOffset > this.state.sticky && document.documentElement.clientWidth < 800) {
            element.classList.add(classes.sticky);
        } else {
            element.classList.remove(classes.sticky);
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

        const assignedClasses = [classes.NavigationItems];

        return (
            <div className={assignedClasses.join(' ')} id='navs'>
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