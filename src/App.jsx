import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Categories from "./components/others/Categories";
import SignUp from "./components/LoginPage/SignUp";
import SignIn from "./components/LoginPage/SignIn";
import Slider from "./components/others/Slider";
import Footer from "./components/Footer/Footer";
import Growth from "./components/others/Growth";
import HeroSection from "./components/ItemSection/Itemshow";
import ShowPage from "./components/Products/ShowPage"; // Import ShowPage component

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/shopNow" element={<ShowPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

const Home = () => (
  <>
    <Categories />
    <Slider />
    <HeroSection />
    <Growth />
  </>
);

export default App;
