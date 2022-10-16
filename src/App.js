import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Sweater from "./Pages/Products/Sweater/Sweater";
import Profile from "./Pages/Profile/Profile";
import Services from "./Pages/Services/Services";
import Hoody from "./Pages/Products/Knit/Hoody";
import Jogger from "./Pages/Products/Knit/Jogger";
import PoloShirt from "./Pages/Products/Knit/PoloShirt";
import TShirt from "./Pages/Products/Knit/TShirt";
import SweatShirt from "./Pages/Products/Knit/SweatShirt";
import Mission from "./Pages/Mission&Vission/Mission";
import Header from "./Pages/Share/Header/Header";
import Footer from "./Pages/Share/Footer/Footer";
import Shirts from "./Pages/Products/Woven/Shirts";
import Jeans from "./Pages/Products/Woven/Jeans";
import Chino from "./Pages/Products/Woven/Chino";
import Shorts from "./Pages/Products/Woven/Shorts";
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/companies" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hoody" element={<Hoody/>} />
          <Route path="/jogger" element={<Jogger />} />
          <Route path="/poloShirt" element={<PoloShirt />} />
          <Route path="/tShirt" element={<TShirt />} />
          <Route path="/sweatShirt" element={<SweatShirt/>} />
          <Route path="/sweater" element={<Sweater />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/jeans" element={<Jeans/>} />
          <Route path="/shirts" element={<Shirts/>} />
          <Route path="/chino" element={<Chino/>} />
          <Route path="/shorts" element={<Shorts/>} />
          <Route path="/sweater" element={<Sweater/>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
