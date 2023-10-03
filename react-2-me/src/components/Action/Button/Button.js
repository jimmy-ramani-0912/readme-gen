import React from "react";
import Styled from "styled-components";

const ButtonSec = Styled.div`
background-color:#F6FAFD ;
border:1.6px solid black;
display: flex;
align-items: center;
padding: 0.8rem;
cursor: pointer;
width: 30rem;
justify-content: center;
font-size:1.2rem;

&:hover{
    background-color:#f3f3f3;
}

@media screen and (max-width: 1200px) {
  width: 25rem;
}

@media screen and (max-width: 950px) {
  width: 20rem;
  font-size:1rem;
}

@media screen and (max-width: 620px) {
  width: 16rem;
  font-size:0.8rem
}
@media screen and (max-width: 520px) {
width:auto;}

`;

const IconSec = Styled.div`
font-size:2rem;
`;

const TitleCompo = Styled.h2`
@media screen and (max-width: 520px) {
  display: none;
}
`;

function Button(props) {
  const { Icon, Title, onPressed } = props;

  return (
    <ButtonSec onClick={onPressed}>
      <IconSec>
        <ion-icon name={Icon}></ion-icon>
      </IconSec>
      <TitleCompo>{Title}</TitleCompo>
    </ButtonSec>
  );
}

export default Button;
