import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'shared/components/button/Button';

import styles from './Sit.css';

class Sit extends Component {
    constructor(props) {
        super(props);
        const availableTable = props.tables.find((table) => table.guests === 0);

        this.state = {
            tableId: availableTable && availableTable.id,
            numberOfGuests: 1,
        };
        this.handleTableChange = this.handleTableChange.bind(this);
        this.handleGuestsChange = this.handleGuestsChange.bind(this);
        this.handleSitClick = this.handleSitClick.bind(this);
    }

    render() {
        const { tables } = this.props;
        const availableTables = tables.filter((table) => table.guests === 0);

        if (!availableTables.length) {
            return (
                <div>
                    You will have to wait for a new table to be available.
                </div>
            );
        }

        return (
            <div className={ styles.sit }>
                <div className={ styles.header }>
                    Select your table:
                </div>
                <select
                    className={ styles.dropdown }
                    onChange={ this.handleTableChange }>
                    { availableTables.map((table) => (
                        <option key={ table.id }
                            value={ table.id }>
                            { table.id + 1 }
                        </option>
                    )) }
                </select>
                <select className={ styles.dropdown }
                    onChange={ this.handleGuestsChange }>
                    <option value={ 1 }>One Guest</option>
                    <option value={ 2 }>Two Guests</option>
                    <option value={ 3 }>Three Guests</option>
                    <option value={ 4 }>Four Guests</option>
                </select>
                <Button onClick={ this.handleSitClick }>
                    SIT
                </Button>
            </div>
        );
    }

    handleSitClick() {
        const { tables, onNewGuests } = this.props;
        const { tableId, numberOfGuests } = this.state;
        const availableTable = tables.find((table) => table.guests === 0 && table.id !== tableId);

        availableTable && this.setState({ tableId: availableTable.id });
        onNewGuests && onNewGuests(tableId, numberOfGuests);
    }

    handleGuestsChange(e) {
        this.setState({
            numberOfGuests: Number(e.target.value),
        });
    }

    handleTableChange(e) {
        this.setState({
            tableId: Number(e.target.value),
        });
    }

    static propTypes = {
        className: PropTypes.string,
        tables: PropTypes.array.isRequired,
        onNewGuests: PropTypes.func.isRequired,
    }
}

export default Sit;
