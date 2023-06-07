import React from "react";
import styled from "styled-components";

const Sidebar = ({ email }) => {
  return <SidebarWrapper>{email}</SidebarWrapper>;
};

const SidebarWrapper = styled.div`
  border: 1px solid blue;
`;

export default Sidebar;