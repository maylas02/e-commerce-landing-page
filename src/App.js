import { Best } from "./components/Best";
import { Cashback } from "./components/Cashback";
import { Categories } from "./components/Categories";
import { Choose } from "./components/Choose";
import { Deals } from "./components/Deals";
import { Discount } from "./components/Discount";
import { Image } from "./components/Image";
import { Navbar } from "./components/Navbar";
import { Weekly } from "./components/Weekly";
import { Routes, Route } from "react-router-dom";
import { Gadgets } from "./components/Gadgets";
import { Fashion } from "./components/Fashion";
import { Toys } from "./components/Toys";
import { Education } from "./components/Education";
import { Beauty } from "./components/Beauty";
import { Fitness } from "./components/Fitness";
import { Furniture } from "./components/Furniture";
import { Sneakers } from "./components/Sneakers";
import { Cards } from "./components/Cards";
import { Seller } from "./components/Seller";
import { Trending } from "./components/Trending";
import { BestSeller } from "./components/BestSeller";
import { Services } from "./components/Services";
import { Shopcart } from "./components/Shopcart";

function App() {
  return (
    <div>
      <Navbar />
      <Image />
      <Categories />
      <Deals />
      <Choose />
      <Discount />
      <Weekly />
      <Cashback />
      <Best />
      <Routes>
        <Route path="/" element={<Gadgets />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/education" element={<Education />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/sneakers" element={<Sneakers />} />
      </Routes>
      <Cards />
      <Seller />
      <Trending />
      <BestSeller />
      <Services />
      <Shopcart />
    </div>
  );
}

export default App;
