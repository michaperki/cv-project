import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";
import EducationItem from "./EducationItem";

const Education = ({ education, onChange }) => {
  const educationItems = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
    />
  ));

  return (
    <Section title="Education" direction="column">
      {educationItems}
    </Section>
  );
};

export default Education;
