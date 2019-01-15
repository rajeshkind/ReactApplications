import React, { Component } from 'react';
import PropTypes from "prop-types";

class Checkbox extends Component {
  
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div>
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          <span>{label}</span>
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Checkbox;