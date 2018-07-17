import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from 'shared/components/drawer/Drawer';
import Plates from './plates/Plates';

import styles from './Kitchen.css';

class Kitchen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            tableId: 0,
        };

        this.handleOnKitchenHover = this.handleOnKitchenHover.bind(this);
        this.handleOnKitchenLeave = this.handleOnKitchenLeave.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);
        this.handleMealReady = this.handleMealReady.bind(this);
    }

    render() {
        const { className, kitchen, isOpen } = this.props;

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
                    <div className={ styles.drawerTitle }>
                        Table to check:
                    </div>
                    <select className={ styles.dropdown }
                        onChange={ this.handleTableChange }>
                        <option value="1">Table 1</option>
                        <option value="2">Table 2</option>
                        <option value="3">Table 3</option>
                        <option value="4">Table 4</option>
                    </select>
                    <div className={ styles.plates }>
                        Plates being cooked:
                        <Plates orders={ kitchen[this.state.tableId] } onMealReady={ this.handleMealReady } />
                    </div>
                </Drawer>
            </div>
        );
    }

    handleTableChange(event) {
        this.setState({
            tableId: Number(event.target.value),
        });
    }

    handleMealReady(orderId, itemName, itemQuantity) {
        const { onMealReady } = this.props;

        onMealReady && onMealReady(this.state.tableId, orderId, itemName, itemQuantity);
    }

    handleOnKitchenHover() {
        const { onHover } = this.props;

        onHover && onHover();
    }

    handleOnKitchenLeave() {
        const { onLeave } = this.props;

        onLeave && onLeave();
    }

    static propTypes = {
        className: PropTypes.string,
        kitchen: PropTypes.object,
        isOpen: PropTypes.bool,
        onHover: PropTypes.func,
        onLeave: PropTypes.func,
        onMealReady: PropTypes.func,
    }
}

export default Kitchen;
