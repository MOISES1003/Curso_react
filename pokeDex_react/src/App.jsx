import { useState } from "react";
import { ButtonBar } from "./components/ButtonBar";
import { TopBar } from "./components/TopBar";
import { PokeList } from "./components/PokeList";
import "./App.css";

function App() {
  return (
    <div>
      <TopBar />
      <PokeList />
      <ButtonBar />
    </div>
  );
}

export default App;
