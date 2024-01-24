import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App";
import Navbar from "./components/Navbar";
import Register from "./page/Register";
import Login from "./page/Login";

export default function routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" index element={<Login />} />
        <Route path="/register" index element={<Register />} />
        <Route path="*" index element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return <div>Page not Found</div>;
}