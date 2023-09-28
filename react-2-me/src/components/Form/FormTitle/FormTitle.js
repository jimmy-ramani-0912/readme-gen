import React from "react";
import Styled from "styled-components";

function FormTitle(props) {
  const { headingTitle } = props;

  const HeadingTitle = Styled.h1`
  color:#0A0B22;
  font-size:2.4rem;
`;

  return <HeadingTitle>{headingTitle}</HeadingTitle>;
}

export default FormTitle;
