import React from "react";
import Input from "../Utils/Input";
import Section from "../Utils/Section";

const Personal = ({ personalInfo, onChange }) => {
  return (
    <Section title="Personal Info" direction="column">
      <Input
        name="firstName"
        value={personalInfo.firstName}
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="first name"
      />
      <Input
        name="lastName"
        value={personalInfo.lastName}
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="last name"
      />
      <Input
        name="title"
        value={personalInfo.title}
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="title"
      />
      <Input
        name="email"
        value={personalInfo.email}
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="email"
      />
    </Section>
  );
};

export default Personal;