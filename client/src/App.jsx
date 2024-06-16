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
import ShowPage from "./components/Products/ShowPage";
import CartPage from "./components/CartPage/CartPage"; 
import { CartProvider } from "./contexts/CartContext";
import AddProduct from "./components/Products/AddProduct"; 
import PromotedAds from "./components/Ads/PromotedAds"; 

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Home />} />
            <Route path="/shopNow" element={<ShowPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/admin/addProduct" element={<AddProduct />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

const Home = () => (
  <>
    <Categories />
    <Slider />
    <HeroSection />
    <PromotedAds />
    <Growth />
  </>
);

export default App;
