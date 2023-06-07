import React from "react";
import styled from "styled-components";

const CVHeader = ({ personalInfo }) => {
  const { firstName, lastName, title } = personalInfo;
  return (
    <CVHeaderWrapper>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{title}</p>
    </CVHeaderWrapper>
  );
};

const CVHeaderWrapper = styled.header`
  grid-column: span 2;
  background-color: lightgrey;
  padding: 2rem;
`;

export default CVHeader;
