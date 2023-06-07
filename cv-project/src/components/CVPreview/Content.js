import React from "react";
import styled from "styled-components";
import EducationItem from "./EducationItem";

const Content = ({ education, experience }) => {
  const educationItems = education.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));

  return (
    <ContentWrapper>
      {educationItems} {experience.job}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  border: 1px solid green;
`;

export default Content;
