import React, { Component } from 'react';
import PropTypes from 'prop-types';

import menu from 'shared/media/images/menu';

import styles from './Cooking.css';

class Cooking extends Component {
    componentDidMount() {
        const { onFinishedCooking, tableId, orderId, itemName, itemQuantity, itemCookingTime } = this.props;

        setTimeout(() => onFinishedCooking(tableId, orderId, itemName, itemQuantity), itemQuantity * itemCookingTime);
    }

    render() {
        const { itemName, itemQuantity } = this.props;

        if (!itemQuantity) {
            return null;
        }

        return (
            <div className={ styles.plate }>
                <img className={ styles.image } src={ menu[itemName] } />
                <div>{ itemName } - { `${itemQuantity}x` }</div>
            </div>
        );
    }

    static propTypes = {
        tableId: PropTypes.number.isRequired,
        orderId: PropTypes.number.isRequired,
        itemName: PropTypes.string.isRequired,
        itemQuantity: PropTypes.number.isRequired,
        onFinishedCooking: PropTypes.func.isRequired,
        itemCookingTime: PropTypes.number.isRequired,
    }
}

export default Cooking;
