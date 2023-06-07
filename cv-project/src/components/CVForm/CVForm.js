import React from "react";
import Personal from "./Personal";

const CVForm = ({ cv, onChangePersonal }) => {
  return (
    <>
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
    </>
  );
};

export default CVForm;
