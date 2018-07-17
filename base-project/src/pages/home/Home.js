import React, { Component } from 'react';
import Room from './room/Room';
import Waiter from './waiter/Waiter';
import Kitchen from './kitchen/Kitchen';
import styles from './Home.css';
import omit from 'lodash/omit';

import menu from 'shared/constants/menu';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waiterOpen: false,
            kitchenOpen: false,
            tables: [{
                id: 0,
                guests: 0,
                total: 0,
                paid: false,
            },
            {
                id: 1,
                guests: 0,
                total: 0,
                paid: false,
            },
            {
                id: 2,
                guests: 0,
                total: 0,
                paid: false,
            },
            {
                id: 3,
                guests: 0,
                total: 0,
                paid: false,
            }],
            kitchen: {
                0: [],
                1: [],
                2: [],
                3: [],
            },
        };

        this.handleOnTableClick = this.handleOnTableClick.bind(this);
        this.handleOnWaiterHover = this.handleOnWaiterHover.bind(this);
        this.handleOnWaiterLeave = this.handleOnWaiterLeave.bind(this);
        this.handleOnKitchenHover = this.handleOnKitchenHover.bind(this);
        this.handleOnKitchenLeave = this.handleOnKitchenLeave.bind(this);

        this.handleOnNewGuests = this.handleOnNewGuests.bind(this);
        this.handleOnNewOrder = this.handleOnNewOrder.bind(this);
        this.handleOnLeavingGuests = this.handleOnLeavingGuests.bind(this);
        this.handleOnMealReady = this.handleOnMealReady.bind(this);
    }

    render() {
        const { waiterOpen, kitchenOpen, tables, kitchen } = this.state;

        return (
            <main className={ styles.homePage }>
                <div className={ styles.container }>
                    <h2 className={ styles.welcoming }>
                        Welcome to our Restaurant!
                    </h2>
                    <h6 className={ styles.demo }>
                        This is a Demo
                    </h6>
                    <Room tables={ tables }
                        onTableClick={ this.handleOnTableClick } />
                </div>
                <div className={ styles.sideContainer }>
                    <Waiter className={ styles.waiter }
                        tables={ tables }
                        isOpen={ waiterOpen }
                        onHover={ this.handleOnWaiterHover }
                        onLeave={ this.handleOnWaiterLeave }
                        onNewGuests={ this.handleOnNewGuests }
                        onNewOrder={ this.handleOnNewOrder }
                        onLeavingGuests={ this.handleOnLeavingGuests } />
                    <Kitchen className={ styles.kitchen }
                        kitchen={ kitchen }
                        isOpen={ kitchenOpen }
                        onHover={ this.handleOnKitchenHover }
                        onLeave={ this.handleOnKitchenLeave }
                        onMealReady={ this.handleOnMealReady } />
                </div>
            </main>
        );
    }

    // Kitchen actions
    handleOnMealReady(tableId, orderId, itemName, quantity) {
        const order = this.state.kitchen[tableId][orderId];
        const updatedOrder = {
            ...order,
            items: omit(order.items, itemName),
        };

        this.setState(({ tables, kitchen }) => ({
            tables: [
                ...tables.slice(0, tableId),
                {
                    ...tables[tableId],
                    total: tables[tableId].total + (menu.find((entry) => entry.itemName === itemName).itemPrice * quantity),
                    order: {
                        ...tables[tableId].order,
                        [itemName]: tables[tableId].order ? (tables[tableId].order[itemName] || 0) + quantity : quantity,
                    },
                },
                ...tables.slice(tableId + 1),
            ],
            kitchen: {
                ...kitchen,
                [tableId]: [
                    ...kitchen[tableId].slice(0, orderId),
                    updatedOrder,
                    ...kitchen[tableId].slice(orderId + 1),
                ],
            },
        }));
    }

    // Waiter actions
    handleOnNewOrder(tableId, order) {
        this.setState(({ kitchen }) => ({
            kitchen: {
                ...kitchen,
                [tableId]: [
                    ...kitchen[tableId],
                    order,
                ],
            },
        }));
    }

    handleOnNewGuests(tableIndex, guests) {
        this.setState(({ tables }) => ({
            tables: [
                ...tables.slice(0, tableIndex),
                {
                    id: tableIndex,
                    guests,
                    total: 0,
                    paid: false,
                },
                ...tables.slice(tableIndex + 1),
            ],
        }));
    }

    handleOnLeavingGuests(tableIndex) {
        this.setState(({ tables }) => ({
            tables: [
                ...tables.slice(0, tableIndex),
                {
                    id: tableIndex,
                    guests: 0,
                    total: 0,
                    paid: false,
                },
                ...tables.slice(tableIndex + 1),
            ],
        }));
    }

    // Waiter panels
    handleOnWaiterHover() {
        this.setState({ waiterOpen: true });
    }

    handleOnWaiterLeave() {
        this.setState({ waiterOpen: false });
    }

    handleOnTableClick() {
        this.setState({ waiterOpen: true });
    }

    // Kitchen panels
    handleOnKitchenHover() {
        this.setState({ kitchenOpen: true });
    }

    handleOnKitchenLeave() {
        this.setState({ kitchenOpen: false });
    }
}

export default Home;
