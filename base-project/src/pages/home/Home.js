import React, { PureComponent } from 'react';
import styles from './Home.css';

class Home extends PureComponent {
    render() {
        return (
            <main className={ styles.homePage }>
                <div className={ styles.container } />
            </main>
        );
    }
}

export default Home;
