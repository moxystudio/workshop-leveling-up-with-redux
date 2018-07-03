import React, { PureComponent } from 'react';
import Table from './table/Table';
import Waiter from './waiter/Waiter';
import Kitchen from './kitchen/Kitchen';
import styles from './Home.css';

class Home extends PureComponent {
    render() {
        const tables = [
            {
                customers: 0,
                plates: [],
            },
            {
                customers: 0,
                plates: [],
            },
            {
                customers: 0,
                plates: [],
            },
            {
                customers: 0,
                plates: [],
            },
        ];

        const renderTables = tables.map((table, index) => (
            <Table key={ `table--${index}` } />
        ));

        return (
            <main className={ styles.homePage }>
                <div className={ styles.container }>
                    <h2 className={ styles.welcoming }>
                        Welcome to our Restaurant!
                    </h2>
                    <h6 className={ styles.demo }>
                        This is a Demo
                    </h6>
                    <div className={ styles.tablesWrapper }>
                        { renderTables }
                    </div>
                </div>
                <div className={ styles.sideContainer }>
                    <Waiter className={ styles.waiter } />
                    <Kitchen className={ styles.kitchen } />
                </div>
            </main>
        );
    }
}

export default Home;
