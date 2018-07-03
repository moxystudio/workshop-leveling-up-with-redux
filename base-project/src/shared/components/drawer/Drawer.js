import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Drawer.css';

class Drawer extends PureComponent {
    render() {
        const { className, children, isOpen, onLeave } = this.props;
        const drawerClassName = classNames(styles.drawer, {
            [className]: className,
            [styles.open]: isOpen,
        });

        return (
            <div className={ drawerClassName } onMouseLeave={ onLeave }>
                { children }
            </div>
        );
    }

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]).isRequired,
        isOpen: PropTypes.bool,
        onLeave: PropTypes.func,
    }
}

export default Drawer;
