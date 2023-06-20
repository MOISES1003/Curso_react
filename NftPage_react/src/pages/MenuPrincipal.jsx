import { Navigation } from "../components/Navigation";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Light } from "../styles/Themes";
import { ThemeProvider } from "styled-components"; //esto es parte del styled components siendo una palabra reservada

export function MenuPrincipal() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
        <Navigation />
      </ThemeProvider>
    </main>
  );
}
