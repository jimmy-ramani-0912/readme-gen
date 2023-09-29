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
`;

const IconSec = Styled.div`
font-size:2rem;
margin-right:1rem;
`;

function Button(props) {
  const { Icon, Title, onPressed } = props;

  return (
    <ButtonSec>
      <IconSec>
        <ion-icon name={Icon}></ion-icon>
      </IconSec>
      <h2>{Title}</h2>
    </ButtonSec>
  );
}

export default Button;
