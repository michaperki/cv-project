import React from "react";
import Input from "../Utils/Input";

const EducationItem = ({ id, educationItem, onChange }) => {
  return (
    <>
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="school"
        placeholder="school"
        value={educationItem.school}
      />
    </>
  );
};

export default EducationItem;