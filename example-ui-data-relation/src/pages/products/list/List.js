import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actions, selectors } from 'shared/state/products';
import getFilteredItems from 'shared/state/products/getFilteredItems';
import { actions as favoriteActions } from 'shared/state/user/favorites';

import Loading from 'shared/components/loading/Loading';

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
        const { items, error, isLoading } = this.props;

        if (error) {
            return <div className={ styles.error }>{ error.message }</div>;
        }

        if (isLoading) {
            return <Loading />;
        }

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
        error: PropTypes.object,
        isLoading: PropTypes.bool,
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
        error: selectors.getError(state),
        isLoading: selectors.getStatus(state),
        items: getFilteredItems(items, filterBy, sortBy),
    };
};

export const mapDispatchToProps = (dispatch) => ({
    load: () => dispatch(actions.load()),
    loadMore: () => dispatch(actions.loadMore()),
    addToFavorites: (wishlistId, item) => dispatch(favoriteActions.addToFavorites(wishlistId, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
