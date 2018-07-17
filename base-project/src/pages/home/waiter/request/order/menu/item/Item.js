import React, { Component } from 'react';
import PropTypes from 'prop-types';

import menu from 'shared/media/images/menu';

import styles from './Item.css';

class Item extends Component {
    constructor() {
        super();

        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }

    render() {
        const { itemName, itemPrice } = this.props;

        return (
            <div className={ styles.item }>
                <img className={ styles.image } src={ menu[itemName] } />
                <div>{ itemName } - { `$ ${itemPrice}` }</div>
                <input onChange={ this.handleQuantityChange } />
            </div>
        );
    }

    handleQuantityChange(e) {
        const { itemName, onQuantityChange } = this.props;

        onQuantityChange && onQuantityChange(itemName, Number(e.target.value));
    }

    static propTypes = {
        itemName: PropTypes.string.isRequired,
        itemPrice: PropTypes.number.isRequired,
        onQuantityChange: PropTypes.func.isRequired,
    }
}

export default Item;
