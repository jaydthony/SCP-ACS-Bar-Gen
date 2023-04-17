import React from "react";

const Field4 = ({ name, op1, op2, selectedOption, setSelectedOption }) => {
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="w-full flex gap-4 flex-col">
      <label for={name}>{name}</label>
      <select
        id={name}
        value={selectedOption}
        onChange={handleSelectChange}
        className="font-medium px-5 py-4 rounded-2xl"
      >
        <option value={op1}>{op1}</option>
        <option value={op2}>{op2}</option>
      </select>
    </div>
  );
};

export default Field4;
