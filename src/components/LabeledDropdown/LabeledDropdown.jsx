import React from 'react';
import PropTypes from 'prop-types';
import styles from './LabeledDropdown.styl';
import Dropdown from '../Dropdown/Dropdown';

const LabeledDropdown = ({
  labelText, optionsList, width, onChange, value,
}) => (
  <div className={styles.LabeledDropdown}>
    { labelText && <div className={styles.Label}>{labelText}</div> }
    <Dropdown settings={{
      optionsList, width, onChange, value,
    }}
    />
  </div>
);

LabeledDropdown.propTypes = {
  labelText: PropTypes.string,
  optionsList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    }).isRequired,
  ),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.string,
  onChange: PropTypes.func,
};

export default LabeledDropdown;
