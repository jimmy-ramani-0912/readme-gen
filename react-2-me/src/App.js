import Styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/Globalstyle/Globalstyle";
import HeadingTitle from "./components/HeadingTitle/HeadingTitle";
import Form from "./components/Form/Form";
import Action from "./components/Action/Action";
import React, { useState } from "react";

function App() {
  // const theme = {
  //   color: {
  //     textcolor: "red",
  //   },
  // };

  const [showForm, setShowForm] = useState(true);

  const Container = Styled.div`
    height: 100vh;
    overflow: auto;
  `;

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {/* <ThemeProvider> */}
      <Container>
        <GlobalStyle />
        {showForm ? (
          <>
            <HeadingTitle />
            <Form toggleFormVisibility={toggleFormVisibility} />
          </>
        ) : (
          <>
            <HeadingTitle />
            <Action />
          </>
        )}
      </Container>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
