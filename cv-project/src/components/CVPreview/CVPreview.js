import React, { Component } from "react";
import styled from "styled-components";
import Header from './Header';

class CVPreview extends Component {
  render() {
    const { cv } = this.props;
    return <><Header personalInfo={cv.personalInfo}/></>;
  }
}

export default CVPreview;
