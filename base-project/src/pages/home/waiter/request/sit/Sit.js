import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'shared/components/button/Button';

import styles from './Sit.css';

class Sit extends Component {
    constructor(props) {
        super(props)
        this.handleTableChange = this.handleTableChange.bind(this);
        this.handleGuestsChange = this.handleGuestsChange.bind(this);
    }

    render() {
        const { tables } = this.props;

        if (!tables.length) {
            return (
                <div>
                    You will have to wait for a new table to be available.
                </div>
            )
        }

        return (
            <div className={ styles.sit }>
                <div className={ styles.header }>
                    Select your table:
                </div>
                <select className={ styles.dropdown }
                    onChange={ this.handleTableChange }>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                    <option value="four">Four</option>
                </select>
                <select className={ styles.dropdown }
                    onChange={ this.handleGuestsChange }>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                    <option value="four">Four</option>
                </select>
                <Button>
                    SIT
                </Button>
            </div>
        );
    }

    handleGuestsChange() {
        console.log('request changed');
    }

    handleTableChange() {
        console.log('table changed');
    }

    static propTypes = {
        className: PropTypes.string,
        tables: PropTypes.array.isRequired,
    }
}

export default Sit;
