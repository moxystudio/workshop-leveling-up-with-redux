import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Bench.css';

const Bench = ({ className, verticalAlignment, horizontalAlignment, isTaken }) => {
    const benchClassNames = classNames(styles.bench, {
        [className]: className,
        [styles.top]: verticalAlignment === 'top',
        [styles.bottom]: verticalAlignment === 'bottom',
        [styles.left]: horizontalAlignment === 'left',
        [styles.right]: horizontalAlignment === 'right',
        [styles.isTaken]: !!isTaken,
    });

    return (
        <div className={ benchClassNames } />
    );
};

Bench.propTypes = {
    className: PropTypes.string,
    verticalAlignment: PropTypes.oneOf(['top', 'bottom']),
    horizontalAlignment: PropTypes.oneOf(['left', 'right']),
    isTaken: PropTypes.bool,
};

export default Bench;
