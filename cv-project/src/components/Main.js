import React, { useState } from "react";
import emptyCV from "./Utils/EmptyCV";
import CVForm from "./CVForm";
import CVPreview from "./CVPreview";
import styled from "styled-components";

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
    <MainWrapper>
      <CVForm cv={cv} onChangePersonal={handleChangePersonal} />
      <CVPreview cv={cv} />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Main;
