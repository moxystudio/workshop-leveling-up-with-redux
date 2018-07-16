import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import styles from './Order.css';

class Order extends Component {
    render() {
        return (
            <div>
                Form with quantities for each available plate
            </div>
        );
    }

    static propTypes = {
        className: PropTypes.string,
        tables: PropTypes.array.isRequired,
        onNewOrder: PropTypes.func.isRequired,
    }
}

export default Order;
