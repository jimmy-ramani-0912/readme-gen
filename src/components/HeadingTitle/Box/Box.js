import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const rotateIcon = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const BoxCompo = styled.div`
  display: flex;
  align-items: center;
  border: 1.8px solid #0a0b22;
  padding: 0.4rem 0.8rem;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 1.6rem;
`;

const IconContainer = styled.div`
  font-size: 1.6rem;
  margin-right: 1rem;
`;

const Icon = styled(IconContainer)`
  animation: ${(props) =>
    props.rotate ? `${rotateIcon} 0.5s linear` : "none"};
`;

const BoxTitle = styled.p`
  font-size: 1.4rem;
  color: #0a0b22;
  display: flex;
  align-items: center;
  margin: 0;
`;

const Num = styled.p`
  color: #762eb6;
  display: block;
  margin-left: 0.8rem;
`;

function Box(props) {
  const { show, title, number, fun } = props;
  const [rotate, setRotate] = useState(false);

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
    <BoxCompo onClick={fun}>
      <IconContainer>
        {show === "star" ? (
          <ion-icon name="star-outline"></ion-icon>
        ) : (
          <ion-icon name="git-network-outline"></ion-icon>
        )}
      </IconContainer>
      <BoxTitle>
        {title} <Num> {number}</Num>
      </BoxTitle>
    </BoxCompo>
  );
}

export default Box;
