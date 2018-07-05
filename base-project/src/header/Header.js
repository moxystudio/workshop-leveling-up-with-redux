import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';

import Svg from 'shared/components/svg/Svg';
import logoSvg from 'shared/media/images/logos/logo.svg';

import styles from './Header.css';

class Header extends PureComponent {
    render() {
        const { className } = this.props;
        const headerClass = classNames(`${styles.header}`, `${className}`);

        return (
            <header className={ headerClass }>
                <Link className={ styles.logo } to="/">
                    <Svg className={ styles.svg } svg={ logoSvg } />
                </Link>
            </header>
        );
    }

    static propTypes = {
        className: PropTypes.string,
    }
}

export default Header;
