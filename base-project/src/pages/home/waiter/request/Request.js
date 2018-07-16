import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Leave from './leave/Leave';
import Order from './order/Order';
import Sit from './sit/Sit';

class Request extends Component {
    render() {
        const { type } = this.props;

        if (type === 'order') {
            return (
                <Order />
            );
        } else if (type === 'sit') {
            return (
                <Sit tables={ [1] } />
            );
        }

        return (
            <Leave />
        );
    }

    static propTypes = {
        type: PropTypes.string,
    }
}

export default Request;
