import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderWrapper>CV Generator</HeaderWrapper>;
};

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    background-color: lightblue;
`;

export default Header;