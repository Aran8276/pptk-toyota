import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Showroom from "./pages/Showroom";
import GRCorolla from "./pages/GRCorolla";
import Locations from "./pages/Locations";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/grcorolla" element={<GRCorolla />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<>Not found</>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
