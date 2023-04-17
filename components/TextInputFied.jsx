import React from "react";

const TextInputField = ({ id, type, placeholder, setstate, name }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <span className="text-black">{name}</span>
      <input
        name={id}
        type={type}
        placeholder={placeholder}
        id={id}
        className="w-full p-4 border border-grey rounded-xl focus:border-main_projcolor"
        onChange={(e) => setstate(e.target.value)}
      />
    </div>
  );
};

export default TextInputField;
