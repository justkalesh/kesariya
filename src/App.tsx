import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import MenuWIP from "./pages/MenuWIP";
import SchemaMarkup from "./seo/SchemaMarkup";

export default function App() {
  return (
    <BrowserRouter>
      <SchemaMarkup />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuWIP />} />
      </Routes>
    </BrowserRouter>
  );
}
