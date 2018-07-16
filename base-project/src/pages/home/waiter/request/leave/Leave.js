import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import styles from './Leave.css';

class Leave extends Component {
    render() {
        return (
            <div>
                Leave Table form
            </div>
        );
    }

    static propTypes = {
        className: PropTypes.string,
        tables: PropTypes.array.isRequired,
        onLeave: PropTypes.func,
    }
}

export default Leave;
