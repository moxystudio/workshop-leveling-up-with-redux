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
        this.handleTableChange = this.handleTableChange.bind(this);
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
                    <select className={ styles.dropdown }
                        onChange={ this.handleTableChange }>
                        <option value="1">Table 1</option>
                        <option value="2">Table 2</option>
                        <option value="3">Table 3</option>
                        <option value="4">Table 4</option>
                    </select>
                    <div>
                        Plates being cooked:
                    </div>
                </Drawer>
            </div>
        );
    }

    handleTableChange(event) {
        console.log('table', event.target.value);
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
