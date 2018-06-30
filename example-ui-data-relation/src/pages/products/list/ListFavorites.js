import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actions as favoriteActions } from 'shared/state/user/favorites';

import Item from './item/Item';
import styles from './List.css';

export class ListFavorites extends Component {
    constructor() {
        super();

        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    render() {
        const { items } = this.props;

        return (
            <div className={ styles.container } >
                <div className={ styles.list }>
                    { items.map((entry) => <Item key={ entry.id } item={ entry } onClick={ this.handleRemoveClick } inFavorites />) }
                </div>
            </div>
        );
    }

    handleRemoveClick(item) {
        const { removeFromFavorites, wishlistId } = this.props;

        removeFromFavorites(wishlistId, item);
    }

    static propTypes = {
        items: PropTypes.array,
        wishlistId: PropTypes.string,
        removeFromFavorites: PropTypes.func.isRequired,
    }
}

export const mapDispatchToProps = (dispatch) => ({
    removeFromFavorites: (wishlistId, item) => dispatch(favoriteActions.removeFromFavorites(wishlistId, item)),
});

export default connect(() => ({}), mapDispatchToProps)(ListFavorites);
