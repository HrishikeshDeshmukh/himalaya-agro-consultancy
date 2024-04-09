import "./App.css";
import "./App1.css";
import "./mobile1.css";
import "./tab1.css";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
