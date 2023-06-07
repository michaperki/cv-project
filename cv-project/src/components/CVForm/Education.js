import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";

const Education = ({ education, onChange }) => {
  return (
    <Section title="Education" direction="column">
      <Input
        name="school"
        value={education.school}
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="school"
      />
    </Section>
  );
};

export default Education;