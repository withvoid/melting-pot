import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  table: {
    width: '100%',
    textAlign: 'left',
    color: '#FFF',
  },
  headingRow: {
    backgroundColor: '#CC1F2D',
  },
  headingItem: {
    padding: 5,
  },
  row: id => ({
    backgroundColor: id % 2 === 0 ? '#40152A' : '#731630',
  }),
  item: {
    padding: 5,
  },
};

const getType = type => {
  switch (type) {
    case 's': {
      return 'string';
    }
    case 'b': {
      return 'boolean';
    }
    case 'f': {
      return 'function';
    }
    case 'o': {
      return 'object';
    }
    default: {
      return 'NaN';
    }
  }
};

const PropsTable = ({ properties }) => {
  return (
    <div>
      <table style={styles.table}>
        <tbody>
          <tr style={styles.headingRow}>
            <th style={styles.headingItem}>Prop Name</th>
            <th style={styles.headingItem}>Type</th>
            <th style={styles.headingItem}>Description</th>
          </tr>
          {properties.map(({ name, type, description }, index) => (
            <tr key={name} style={styles.row(index)}>
              <td style={styles.item}>{name}</td>
              <td style={styles.item}>{getType(type)}</td>
              <td style={styles.item}>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

PropsTable.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PropsTable;
