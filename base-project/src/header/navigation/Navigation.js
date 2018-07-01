import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';

class Navigation extends PureComponent {
    render() {
        return (
            <nav>
                <ul className={ styles.list }>
                    <li className={ styles.listItem }>
                        <Link to="/about" className={ styles.link } activeClassName={ styles.isActive }>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
