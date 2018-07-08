import React from 'react';
import Room from './room/Room';
import Waiter from './waiter/Waiter';
import Kitchen from './kitchen/Kitchen';
import styles from './Home.css';

const Home = () => (
    <main className={ styles.homePage }>
        <div className={ styles.container }>
            <h2 className={ styles.welcoming }>
                Welcome to our Restaurant!
            </h2>
            <h6 className={ styles.demo }>
                This is a Demo
            </h6>
            <Room />
        </div>
        <div className={ styles.sideContainer }>
            <Waiter className={ styles.waiter } />
            <Kitchen className={ styles.kitchen } />
        </div>
    </main>
);

export default Home;
