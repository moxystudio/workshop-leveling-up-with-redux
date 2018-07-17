import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Styles
import styles from './Button.css';

const Button = ({ className, children, disabled, onClick }) => {
    const buttonClassName = classNames(styles.button, className, {
        [styles.disabled]: disabled,
    });

    return (
        <button disabled={ disabled } onClick={ onClick } className={ buttonClassName }>
            { children }
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired, // ADD THEME
};

export default Button;
