import './assets/css/App.css';
import MyReactive from "./components/MyReactive";
//import MyArray from "./components/MyArray";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import PageAbout from "./pages/About"
import PageContact from "./pages/Contact"
import PageHome from "./pages/Home"
import PageError404 from "./pages/Error404"
import PagePortfolios from "./pages/Portfolios"

import {Routes, Route, BrowserRouter} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header></Header>
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="about" element={<PageAbout />} />
                    <Route path="contact" element={<PageContact />} />
                    <Route path="portfolios" element={<PagePortfolios />} />
                    <Route path="*" element={<PageError404 />} />
                </Routes>
            <Footer></Footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
