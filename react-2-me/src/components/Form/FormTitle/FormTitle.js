import React from "react";
import Styled from "styled-components";

const HeadingTitle = Styled.h1`
color:#0A0B22;
font-size:2.4rem;
`;

function FormTitle(props) {
  const { headingTitle } = props;
  return <HeadingTitle>{headingTitle}</HeadingTitle>;
}

export default FormTitle;
