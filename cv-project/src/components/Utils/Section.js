import React from "react";
import styled from "styled-components";

const Section = ({title, children, direction}) => {
  return (
    <SectionWrapper>
      <h1>{title}</h1>
      <Children direction={direction}>{children}</Children>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  border: 1px solid red;
`;

const Children = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction === "column" && "column"}
`

export default Section;