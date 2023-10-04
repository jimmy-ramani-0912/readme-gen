import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Box from "./Box/Box";

function Title() {
  const Header = Styled.div`
    box-shadow:0 0 10px #3d3d3d;
`;

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

  const [star, setStar] = useState(0);
  const [fork, setFork] = useState(0);

  const fetchData = async () => {
    const res = await fetch(
      "https://api.github.com/repos/jimmy-ramani-0912/Location-Based-Attendances"
    );
    const data = await res.json();
    setStar(data.stargazers_count);
    setFork(data.forks_count);
  };

  const openGitHubRepoFork = () => {
    window.open(
      "https://github.com/jimmy-ramani-0912/Location-Based-Attendances/fork",
      "_blank"
    );
  };

  const openGitHubRepoStar = () => {
    window.open(
      "https://github.com/jimmy-ramani-0912/Location-Based-Attendances",
      "_blank"
    );
  };

  useEffect(() => {
    fetchData();
    setInterval(fetchData, 6000);

    return () => {};
  }, []);

  return (
    <Header>
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
          <Box
            show={"star"}
            fun={openGitHubRepoStar}
            title={"Star this repo"}
            number={star}
          />
          <Box
            show={"fork"}
            fun={openGitHubRepoFork}
            title={"Fork On Github"}
            number={fork}
          />
        </BoxFlex>
      </Center>
    </Header>
  );
}

export default Title;
