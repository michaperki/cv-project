import React, { Component } from "react";
import styled from "styled-components";
import CVHeader from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

class CVPreview extends Component {
  render() {
    const { cv } = this.props;
    return (
      <CVPreviewWrapper>
        <CVHeader personalInfo={cv.personalInfo} />
        <Content education={cv.education} experience={cv.experience} />
        <Sidebar email={cv.personalInfo.email} />
      </CVPreviewWrapper>
    );
  }
}

const CVPreviewWrapper = styled.div`
  display: grid;
  grid-template-columns: 160mm 60mm;
  grid-template-rows: 35mm 262mm;
`

export default CVPreview;
