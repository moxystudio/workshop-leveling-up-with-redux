import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import styles from './Leave.css';

class Leave extends Component {
    render() {
        return (
            <div>
                Leave Tableeee
            </div>
        );
    }

    static propTypes = {
        onLeave: PropTypes.func,
    }
}

export default Leave;
