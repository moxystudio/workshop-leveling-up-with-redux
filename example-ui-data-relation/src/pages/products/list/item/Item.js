import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Item.css';

export class Item extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { item, inFavorites } = this.props;

        return (
            <div className={ styles.item }>
                <div>{ item.name }</div>
                <div>{ `$${item.price}` }</div>
                <div className={ styles.imageContainer }>
                    <img className={ styles.image } src={ item.src } />
                </div>
                <button onClick={ this.handleClick }>
                    { inFavorites ? 'Unlove me' : 'Love me' }
                </button>
            </div>
        );
    }

    handleClick() {
        const { item, onClick } = this.props;

        onClick && onClick(item);
    }

    static propTypes = {
        inFavorites: PropTypes.bool,
        item: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired,
    }
}

export default Item;
