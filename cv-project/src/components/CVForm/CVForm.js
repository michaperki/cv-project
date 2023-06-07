import React from "react";
import styled from 'styled-components'
import Personal from "./Personal";
import Education from "./Education";

const CVForm = ({ cv, onChangePersonal, onChangeEducation }) => {
  return (
    <CVFormWrapper>
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
      <Education education={cv.education} onChange={onChangeEducation} />
      
    </CVFormWrapper>
  );
};

const CVFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default CVForm;
