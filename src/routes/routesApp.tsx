import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";

import NotFound from "../pages/notFound";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
