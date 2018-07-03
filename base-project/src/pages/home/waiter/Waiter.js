import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from 'shared/components/drawer/Drawer';

import styles from './Waiter.css';

class Waiter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };

        this.handleOnWaiterHover = this.handleOnWaiterHover.bind(this);
        this.handleOnWaiterLeave = this.handleOnWaiterLeave.bind(this);
    }

    render() {
        const { className } = this.props;
        const { isOpen } = this.state;

        return (
            <div className={ classNames(styles.waiter, { [className]: className }) }
                onMouseEnter={ this.handleOnWaiterHover }
                onClick={ this.handleOnWaiterHover }>
                <div className={ styles.title }>
                    Waiter
                </div>
                <Drawer className={ styles.waiterDrawer }
                    isOpen={ isOpen }
                    onLeave={ this.handleOnWaiterLeave }>
                    Waiter
                    Dropdown Order / Sit
                    Sit = radius list
                    Order = form with quantities for each available things
                </Drawer>
            </div>
        );
    }

    handleOnWaiterHover() {
        this.setState({ isOpen: true });
    }

    handleOnWaiterLeave() {
        this.setState({ isOpen: false });
    }

    static propTypes = {
        className: PropTypes.string,
    }
}

export default Waiter;
