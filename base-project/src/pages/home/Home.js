import React, { Component } from 'react';
import Room from './room/Room';
import Waiter from './waiter/Waiter';
import Kitchen from './kitchen/Kitchen';
import styles from './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waiterOpen: false,
            kitchenOpen: false,
            tables: [{
                guests: 0,
                total: 0,
                paid: false,
            },
            {
                guests: 0,
                total: 0,
                paid: false,
            },
            {
                guests: 0,
                total: 0,
                paid: false,
            },
            {
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
        const { waiterOpen, kitchenOpen, tables } = this.state;

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
                        isOpen={ kitchenOpen }
                        onHover={ this.handleOnKitchenHover }
                        onLeave={ this.handleOnKitchenLeave }
                        onMealReady={ this.handleOnMealReady } />
                </div>
            </main>
        );
    }

    // Kitchen actions
    handleOnMealReady(tableId, mealId) {
        console.log('table id', mealId);
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
