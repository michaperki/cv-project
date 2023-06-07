import React from "react";
import Input from "../Utils/Input";

const Personal = ({ personalInfo, onChange }) => {
  return (
    <>
      <Input
        name="name"
        value={personalInfo.name}
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="name"
      />
      <Input
        name="email"
        value={personalInfo.email}
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="email"
      />
    </>
  );
};

export default Personal;
