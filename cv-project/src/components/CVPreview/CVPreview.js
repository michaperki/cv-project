import React, { Component } from "react";
import styled from "styled-components";
import CVHeader from './Header';

class CVPreview extends Component {
  render() {
    const { cv } = this.props;
    return <> <CVHeader personalInfo={cv.personalInfo}/></>;
  }
}

export default CVPreview;
