import { Routes, Route } from "react-router-dom";

import NavbarCompo from "./components/NavbarCompo";
import FooterCompo from "./components/FooterCompo";

import HomePage from "./pages/HomePage";
import ActionPage from "./pages/ActionPage";
import HororPage from "./pages/HororPage";
import DramaPage from "./pages/DramaPage";
import FaqPage from "./pages/FaqPage";




function App() {
  return (
      <div>
        <NavbarCompo/>

        <Routes>
          <Route path="/" Component={ HomePage }/>
          <Route path="/drama" Component={ DramaPage }/>
          <Route path="/action" Component={ ActionPage }/>
          <Route path="/horor" Component={ HororPage }/>
          <Route path="/faq" Component={ FaqPage }/>
        </Routes>

        <FooterCompo/>
      </div>
  )
}

export default App
