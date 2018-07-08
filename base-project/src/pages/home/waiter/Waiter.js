import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Leave from './leave/Leave';
import Order from './order/Order';
import Sit from './sit/Sit';
import Drawer from 'shared/components/drawer/Drawer';

import styles from './Waiter.css';

class Waiter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            requestType: 'order', // Available types are: sit, order and leave table
        };

        this.handleOnWaiterHover = this.handleOnWaiterHover.bind(this);
        this.handleOnWaiterLeave = this.handleOnWaiterLeave.bind(this);
        this.handleRequestChange = this.handleRequestChange.bind(this);
    }

    render() {
        const { className } = this.props;
        const { isOpen, requestType } = this.state;

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
                    <select className={ styles.dropdown }
                        value={ requestType }
                        onChange={ this.handleRequestChange }>
                        <option value="order">Order</option>
                        <option value="sit">Sit</option>
                        <option value="leave">Leave</option>
                    </select>
                    {requestType === 'order' &&
                        <Order />
                    }
                    { requestType === 'sit' &&
                        <Sit />
                    }
                    { requestType === 'leave' &&
                        <Leave />
                    }
                </Drawer>
            </div>
        );
    }

    handleRequestChange(event) {
        this.setState({ requestType: event.target.value });
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
