import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './item/Item';

class Menu extends Component {
    render() {
        const { onQuantityChange, menu } = this.props;

        return (
            <div>
                { menu.map((entry) => (
                    <Item
                        key={ entry.itemName }
                        itemPrice={ entry.itemPrice }
                        itemName={ entry.itemName }
                        onQuantityChange={ onQuantityChange } />)
                )}
            </div>
        );
    }

    static propTypes = {
        menu: PropTypes.array.isRequired,
        onQuantityChange: PropTypes.func.isRequired,
    }
}

export default Menu;
