import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Leave from './leave/Leave';
import Order from './order/Order';
import Sit from './sit/Sit';

class Request extends Component {
    render() {
        const { type, tables, onNewOrder, onNewGuests, onLeavingGuests } = this.props;

        if (type === 'order') {
            return (
                <Order tables={ tables }
                    onNewOrder={ onNewOrder } />
            );
        } else if (type === 'sit') {
            return (
                <Sit tables={ tables }
                    onNewGuests={ onNewGuests } />
            );
        }

        return (
            <Leave tables={ tables }
                onLeavingGuests={ onLeavingGuests } />
        );
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
        tables: PropTypes.array.isRequired,
        onNewGuests: PropTypes.func.isRequired,
        onNewOrder: PropTypes.func.isRequired,
        onLeavingGuests: PropTypes.func.isRequired,
    }
}

export default Request;
