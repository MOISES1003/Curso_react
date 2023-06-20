import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuPrincipal } from "../pages/MenuPrincipal";

export function MyRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPrincipal/>} />
      </Routes>
    </BrowserRouter>
  );
}
