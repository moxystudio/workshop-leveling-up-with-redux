import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// import { selectors } from 'shared/state/user/favorites';

import ListFavorites from '../../products/list/ListFavorites';

import styles from './WishlistEntry.css';

export class WishlistEntry extends Component {
    render() {
        const { wishlistId, wishlistData } = this.props;

        console.log('I RE-RENDERED: ', wishlistId);

        return (
            <div className={ styles.container } >
                <ListFavorites wishlistId={ wishlistId } items={ wishlistData.items } />
            </div>
        );
    }

    static propTypes = {
        wishlistId: PropTypes.string,
        wishlistData: PropTypes.object.isRequired,
    }
}

/* export const mapStateToProps = () => {
    const getWishlist = selectors.createGetWishlist();

    return (state, { wishlistId }) => ({
        wishlistData: getWishlist(state, wishlistId),
    });
};

export default connect(mapStateToProps)(WishlistEntry); */

export default WishlistEntry;
