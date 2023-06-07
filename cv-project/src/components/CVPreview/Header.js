import React from "react";
import styled from "styled-components";

const Header = ({ personalInfo }) => {
  const { name, email } = personalInfo;
  return (
    <>
      {name} {email}
    </>
  );
};

export default Header;
