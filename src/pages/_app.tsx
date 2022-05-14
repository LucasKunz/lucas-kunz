import type { AppProps } from 'next/app'
import themeLight from "../styles/themes/light";
import themeDark from "../styles/themes/dark";
import GlobalStyle from "../styles/globals";
import usePersistedState from '../utils/usePersistedState';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState("theme", themeDark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? themeLight : themeDark);
  };

  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
