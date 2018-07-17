import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import WishlistEntry from './entry/WishlistEntry';

import styles from './Wishlists.css';

export class Wishlists extends Component {
    render() {
        const { keys, listings } = this.props;

        if (!keys || keys.length === 0) {
            return <div className={ styles.container }>No wishlists yet!</div>;
        }

        return (
            <div className={ styles.container } >
                { keys.map((wishlist) => (
                    <div key={ wishlist }>
                        <h1>{ wishlist }</h1>
                        <WishlistEntry wishlistId={ wishlist } wishlistData={ listings[wishlist] } />
                    </div>
                ))}
            </div>
        );
    }

    static propTypes = {
        listings: PropTypes.object,
        keys: PropTypes.array,
    }
}

export const mapStateToProps = (state) => {
    const listings = state.favorites.listings;
    const keys = state.favorites.keys;

    return {
        listings,
        keys,
    };
};

export default connect(mapStateToProps)(Wishlists);
