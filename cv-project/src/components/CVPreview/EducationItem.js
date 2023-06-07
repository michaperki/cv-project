import React from "react";
import styled from "styled-components";

const EducationItem = ({ educationItem }) => {
  return (<EducationItemWrapper>{educationItem.school}</EducationItemWrapper>)
};

const EducationItemWrapper = styled.div`
  border: 1px solid green;
`;

export default EducationItem;
