import type { NextPage } from "next";
import Header from "../components/Header";
import usePersistedState from "../utils/usePersistedState";

import GlobalStyle from "../styles/globals";
import styled, { ThemeProvider } from "styled-components";
import themeLight from "../styles/themes/light";
import themeDark from "../styles/themes/dark";
import TypeWrite from "../components/TypeWrite";
import TextPortrait from "../components/TextPortrait";


const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1250px;
`

const Home: NextPage = () => {
  const [theme, setTheme] = usePersistedState("theme", themeDark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? themeLight : themeDark);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Container>
        <TypeWrite />
        <TextPortrait />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
