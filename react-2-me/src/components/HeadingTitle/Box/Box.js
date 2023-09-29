import React, { useEffect, useState } from "react";
import Styled from "styled-components";

function Box(props) {
  const { show, title, number, fun } = props;
  const [rotate, setRotate] = useState(false);

  const Box = Styled.div`
  display:flex;
    align-items: center;
    border:1.8px solid #0A0B22;
    padding:0.4rem 0.8rem;
    background-color:#fff;
    cursor:pointer;
    margin-bottom:1.6rem;

  @keyframes rotateIcon {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  `;

  const Icon = Styled.div`
  font-size:1.6rem;
  margin-right:1rem;

  /* ${Box}:hover & { */
    /* animation: rotateIcon 0.5s linear; }*/
    animation: ${rotate ? "rotateIcon 0.5s linear" : "none"};
    `;

  const BoxTitle = Styled.p`
  font-size:1.4rem;
  color: #0A0B22;
  display:flex;
  align-items: center;
  margin:0;
  `;

  const Num = Styled.p`
  color:#762EB6;
  display:bloc;
  margin-left:0.8rem;
  `;

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotate(true);
      setTimeout(() => {
        setRotate(false);
      }, 500);
    }, 1000);
    return () => {
      clearInterval(rotationInterval);
    };
  }, []);

  return (
    <Box onClick={fun}>
      <Icon>
        {show === "star" ? (
          <ion-icon name="star-outline"></ion-icon>
        ) : (
          <ion-icon name="git-network-outline"></ion-icon>
        )}
      </Icon>
      <BoxTitle>
        {title} <Num> {number}</Num>
      </BoxTitle>
    </Box>
  );
}

export default Box;
