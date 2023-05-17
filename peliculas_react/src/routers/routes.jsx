import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetalles } from "../pages/movieDetalles";
export function MyRoutes() {
  return (
    <Router>
      <Routes>
        //aqui pasamos las rutas
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/movie/:movieId" element={<MovieDetalles/>} />
      </Routes>
    </Router>
  );
}
