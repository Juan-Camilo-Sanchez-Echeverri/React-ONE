import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { temaCLaro, temaOscuro } from "./Components/UI/temas.js";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Container from "./Components/Container";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";





function App() {

  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaCLaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
