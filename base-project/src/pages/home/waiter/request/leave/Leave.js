import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'shared/components/button/Button';

import styles from './Leave.css';

class Leave extends Component {
    constructor(props) {
        super(props);
        const usedTables = props.tables.find((table) => table.guests > 0);

        this.state = {
            tableId: usedTables && usedTables.id,
        };
        this.handleLeaveClick = this.handleLeaveClick.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);
    }

    render() {
        const { tables } = this.props;
        const usedTables = tables.filter((table) => table.guests > 0);

        if (!usedTables.length) {
            return (
                <div>
                    No table is being used at the moment.
                </div>
            );
        }

        return (
            <div className={ styles.leave }>
                <div className={ styles.header }>
                    Select your table:
                </div>
                <select
                    className={ styles.dropdown }
                    onChange={ this.handleTableChange }>
                    { usedTables.map((table) => (
                        <option key={ table.id }
                            value={ table.id }>
                            { table.id + 1 }
                        </option>
                    )) }
                </select>
                <Button onClick={ this.handleLeaveClick }>
                    LEAVE
                </Button>
            </div>
        );
    }

    handleTableChange(e) {
        this.setState({
            tableId: Number(e.target.value),
        });
    }

    handleLeaveClick() {
        const { tables, onLeavingGuests } = this.props;
        const { tableId } = this.state;
        const usedTable = tables.find((table) => table.guests > 0 && table.id !== tableId);

        usedTable && this.setState({ tableId: usedTable.id });
        onLeavingGuests && onLeavingGuests(tableId);
    }

    static propTypes = {
        className: PropTypes.string,
        tables: PropTypes.array.isRequired,
        onLeavingGuests: PropTypes.func,
    }
}

export default Leave;
