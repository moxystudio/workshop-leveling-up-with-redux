import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from './menu/Menu';
import Button from 'shared/components/button/Button';
import menu from 'shared/constants/menu';

import styles from './Order.css';

class Order extends Component {
    constructor() {
        super();

        this.state = {
            tableId: 0,
            order: {
                items: {},
                total: 0,
            },
        };

        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);
        this.handleOrderClick = this.handleOrderClick.bind(this);
    }

    render() {
        const { tables } = this.props;
        const usedTables = tables.filter((table) => table.guests > 0);

        return (
            <div className={ styles.order }>
                <Menu menu={ menu } onQuantityChange={ this.handleQuantityChange } />
                { usedTables.length > 0 &&
                    <select
                        className={ styles.dropdown }
                        onChange={ this.handleTableChange }>
                        { usedTables.map((table) => (
                            <option key={ table.id }
                                value={ table.id }>
                                Table { table.id + 1 }
                            </option>
                        )) }
                    </select>
                }
                <Button onClick={ this.handleOrderClick } className={ styles.button } disabled={ usedTables.length === 0 }>
                    ORDER
                </Button>
            </div>
        );
    }

    handleTableChange(e) {
        this.setState({
            tableId: Number(e.target.value),
        });
    }

    handleQuantityChange(item, quantity) {
        this.setState({
            order: {
                ...this.state.order,
                items: {
                    ...this.state.order.items,
                    [item]: quantity,
                },
            },
        });
    }

    handleOrderClick() {
        const { onNewOrder } = this.props;
        const { tableId, order } = this.state;
        const orderItems = order.items;

        const total = menu.reduce((accum, entry) =>
            orderItems[entry.itemName] ? accum + (orderItems[entry.itemName] * entry.itemPrice) : accum, 0);

        this.setState({
            order: {
                ...this.state.order,
                total,
            },
        }, () => onNewOrder && onNewOrder(tableId, this.state.order));
    }

    static propTypes = {
        className: PropTypes.string,
        tables: PropTypes.array.isRequired,
        onNewOrder: PropTypes.func.isRequired,
    }
}

export default Order;
