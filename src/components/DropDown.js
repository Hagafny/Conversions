import React from "react";

const DropDown = ({ values, onChange, selectedValue }) => {
  return (
    <select onChange={onChange}>
      {Object.entries(values).map(([key, value]) => (
        <option key={key} value={key} selected={key === selectedValue}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
