import { Navigation } from "../components/Navigation";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Light } from "../styles/Themes";
import { ThemeProvider } from "styled-components"; //esto es parte del styled components siendo una palabra reservada
import { Home } from "../components/sections/Home";
import { About } from "../components/sections/About";
import { RoadMap } from "../components/sections/RoadMap";

export function MenuPrincipal() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
        <Navigation />
        <Home/>
        <About/>
        <RoadMap/>
      </ThemeProvider>
    </main>
  );
}
