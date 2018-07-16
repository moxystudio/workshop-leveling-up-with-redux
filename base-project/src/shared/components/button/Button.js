import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Styles
import styles from './Button.css';

const Button = ({ className, children, onClick }) => {
    const buttonClassName = classNames(styles.button, className);

    return (
        <button onClick={ onClick } className={ buttonClassName }>
            { children }
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired, // ADD THEME
    onClick: PropTypes.func,
};

export default Button;
