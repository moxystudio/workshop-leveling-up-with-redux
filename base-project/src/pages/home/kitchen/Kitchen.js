import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from 'shared/components/drawer/Drawer';

import styles from './Kitchen.css';

class Kitchen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };

        this.handleOnKitchenHover = this.handleOnKitchenHover.bind(this);
        this.handleOnKitchenLeave = this.handleOnKitchenLeave.bind(this);
    }

    render() {
        const { className } = this.props;
        const { isOpen } = this.state;

        return (
            <div className={ classNames(styles.kitchen, { [className]: className }) }
                onMouseEnter={ this.handleOnKitchenHover }
                onClick={ this.handleOnKitchenHover }>
                <div className={ styles.title }>
                    Kitchen
                </div>
                <Drawer className={ styles.kitchenDrawer }
                    isOpen={ isOpen }
                    onLeave={ this.handleOnKitchenLeave }>
                    Kitchen
                    Dropdown Table (first default selected)
                    List of plates being cooked
                </Drawer>
            </div>
        );
    }

    handleOnKitchenHover() {
        this.setState({ isOpen: true });
    }

    handleOnKitchenLeave() {
        this.setState({ isOpen: false });
    }

    static propTypes = {
        className: PropTypes.string,
    }
}

export default Kitchen;
