import React, { useState } from "react";
import emptyCV from "./Utils/EmptyCV";
import CVForm from "./CVForm";
import CVPreview from "./CVPreview";

const Main = () => {
  const [cv, setCv] = useState(emptyCV);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;

    setCv((prevState) => ({
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  return (
    <>
      <CVForm cv={cv} onChangePersonal={handleChangePersonal} />
      <CVPreview />
    </>
  );
};

export default Main;
