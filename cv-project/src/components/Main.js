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
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeEducation = (e) => {
    const { name, value } = e.target;

    setCv((prevState) => ({
      ...prevState,
      education: [
        {
          ...prevState.education,
          [name]: value,
        },
      ],
    }));
  };

  return (
    <MainWrapper>
      <CVForm
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeEducation={handleChangeEducation}
      />
      <CVPreview cv={cv} />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Main;
