import React from "react";
import Styled from "styled-components";
import Box from "./Box/Box";

function Title() {
  const Center = Styled.div`
  display:grid;
  justify-content:center;
  padding:0.6rem 0;
  background-color:#F2F2F3;
  `;

  const Logo = Styled.img`
  `;

  const HeadingTitle = Styled.h1`
    font-size:2rem;
    cursor:pointer;
    color:#2C5282;
  `;

  const BoxFlex = Styled.div`
    display:  flex;
    justify-content:space-between;
    align-items:center;
    gap:3rem;
  `;

  return (
    <Center>
      <Center>
        <Logo
          width="30"
          height="30"
          src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/external-file-text-file-extension-line-creatype-outline-colourcreatype-61.png"
          alt="external-file-text-file-extension-line-creatype-outline-colourcreatype-61"
        />
      </Center>
      <Center>
        <HeadingTitle>Github Profile README Generator</HeadingTitle>
      </Center>
      <BoxFlex>
        <Box show={"star"} title={"Star this repo"} number={17381} />
        <Box show={"fork"} title={"Fork On Github"} number={5025} />
      </BoxFlex>
    </Center>
  );
}

export default Title;
