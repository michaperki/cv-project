import React from "react";
import styled from 'styled-components'
import Personal from "./Personal";

const CVForm = ({ cv, onChangePersonal }) => {
  return (
    <CVFormWrapper>
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
    </CVFormWrapper>
  );
};

const CVFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default CVForm;
