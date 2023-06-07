import React from "react";
import styled from "styled-components";

const Content = ({ education, experience }) => {
  return (
    <ContentWrapper>
      {education} {experience}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  border: 1px solid green;
`;

export default Content;