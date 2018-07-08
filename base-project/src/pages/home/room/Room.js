import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from './table/Table';
import classNames from 'classnames';

import styles from './Room.css';

class Room extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tables: [{
                guests: 0,
                total: 0,
                paid: false,
            },
            {
                guests: 0,
                total: 0,
                paid: false,
            },
            {
                guests: 0,
                total: 0,
                paid: false,
            },
            {
                guests: 0,
                total: 0,
                paid: false,
            },
            ],
        };
    }

    render() {
        const { tables } = this.state;
        const { className } = this.props;

        const renderTables = tables.map((table, index) => (
            <Table key={ `table--${index}` }
                total={ table.total }
                guests={ table.guests }
                paid={ table.paid } />
        ));

        return (
            <div className={ classNames(styles.room, { [className]: className }) }>
                { renderTables }
            </div>
        );
    }

    static propTypes = {
        className: PropTypes.string,
    }
}

export default Room;
