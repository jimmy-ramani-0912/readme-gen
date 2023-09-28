import Styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/Globalstyle/Globalstyle";
import HeadingTitle from "./components/HeadingTitle/HeadingTitle";
import Form from "./components/Form/Form";

function App() {
  // const theme = {
  //   color: {
  //     textcolor: "red",
  //   },
  // };

  const Container = Styled.div`
    height:100vh;
    overflow:auto;
  `;

  return (
    <>
      {/* <ThemeProvider> */}
      <Container>
        <GlobalStyle />
        <HeadingTitle />
        <Form />
      </Container>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
