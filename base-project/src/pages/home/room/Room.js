import React from 'react';
import PropTypes from 'prop-types';
import Table from './table/Table';
import classNames from 'classnames';

import styles from './Room.css';

const Room = ({ className, tables, onTableClick }) => {
    const renderTables = tables.map((table, index) => (
        <Table key={ `table--${index}` }
            id={ index + 1 }
            total={ table.total }
            guests={ table.guests }
            paid={ table.paid }
            onClick={ onTableClick } />
    ));

    return (
        <div className={ classNames(styles.room, { [className]: className }) }>
            {renderTables}
        </div>
    );
};

Room.propTypes = {
    className: PropTypes.string,
    tables: PropTypes.array,
    onTableClick: PropTypes.func,
};

export default Room;
