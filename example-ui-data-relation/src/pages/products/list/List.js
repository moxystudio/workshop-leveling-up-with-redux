import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actions } from 'shared/state/products';
import getFilteredItems from 'shared/state/products/getFilteredItems';
import { actions as favoriteActions } from 'shared/state/user/favorites';

import Item from './item/Item';
import styles from './List.css';

export class List extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
        this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    }

    componentWillMount() {
        const { load, items } = this.props;

        (!items || items.length === 0) && load();
    }

    render() {
        const { items } = this.props;

        return (
            <div className={ styles.container } >
                <div className={ styles.list }>
                    { items.map((entry) => <Item key={ entry.id } item={ entry } onClick={ this.handleFavoriteClick } />) }
                </div>
                <div className={ styles.buttonWrapper }>
                    <button onClick={ this.handleClick }>
                        Load More
                    </button>
                </div>
            </div>
        );
    }

    handleClick() {
        const { loadMore } = this.props;

        loadMore();
    }

    handleFavoriteClick(item) {
        const { addToFavorites } = this.props;

        const wishlistId = prompt('Name of the wishlist to add the product to: '); // eslint-disable-line

        addToFavorites(wishlistId, item);
    }

    static propTypes = {
        items: PropTypes.array,
        load: PropTypes.func.isRequired,
        loadMore: PropTypes.func.isRequired,
        addToFavorites: PropTypes.func.isRequired,
    }
}

export const mapStateToProps = (state) => {
    // Items: selectors.getFilteredItems(state), /* Improving performance with selectors */
    const items = state.products.items;
    const filterBy = state.products.filterBy;
    const sortBy = state.products.sortBy;

    return {
        items: getFilteredItems(items, filterBy, sortBy),
    };
};

export const mapDispatchToProps = (dispatch) => ({
    load: () => dispatch(actions.load()),
    loadMore: () => dispatch(actions.loadMore()),
    addToFavorites: (wishlistId, item) => dispatch(favoriteActions.addToFavorites(wishlistId, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
