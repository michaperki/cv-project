import React from "react";
import Input from "../Utils/Input";

const Personal = ({ personalInfo, onChange }) => {

  return (
    <>
      <Input name="name" value={personalInfo.name} onChange={(e) => onChange(e)} />
      <Input name="email" value={personalInfo.email} onChange={(e) => onChange(e)} />
    </>
  );
};

export default Personal;