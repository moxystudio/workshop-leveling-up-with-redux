import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Bench from './bench/Bench';
import styles from './Table.css';

const Table = ({ className, total }) => (
    <div className={ classNames(styles.container, { [className]: className }) }>
        <div className={ styles.table }>
            <Bench verticalAlignment="top" horizontalAlignment="left" />
            <Bench verticalAlignment="top" horizontalAlignment="right" />
            <Bench verticalAlignment="bottom" horizontalAlignment="left" />
            <Bench verticalAlignment="bottom" horizontalAlignment="right" />
            {
                total &&
                    <div className={ styles.price }>
                        { total }€
                    </div>
            }
        </div>
    </div>
);

Table.propTypes = {
    className: PropTypes.string,
    total: PropTypes.number,
};

export default Table;
