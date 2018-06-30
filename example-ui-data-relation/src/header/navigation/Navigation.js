import React, { PureComponent } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './Navigation.css';

class Navigation extends PureComponent {
    render() {
        return (
            <nav>
                <ul className={ styles.list }>
                    <li className={ styles.listItem }>
                        <IndexLink to="/" className={ styles.link } activeClassName={ styles.isActive }>
                            Home
                        </IndexLink>
                    </li>
                    <li className={ styles.listItem }>
                        <Link to="/about" className={ styles.link } activeClassName={ styles.isActive }>
                            About
                        </Link>
                    </li>
                    <li className={ styles.listItem }>
                        <Link to="/products" className={ styles.link } activeClassName={ styles.isActive }>
                            Products
                        </Link>
                    </li>
                    <li className={ styles.listItem }>
                        <Link to="/wishlists" className={ styles.link } activeClassName={ styles.isActive }>
                            Wishlists
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
