// App.jsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import History from "./pages/History";
import MenuPage from "./components/MenuPage";
import Menu from "./components/Menu";
import WineMenu from "./components/WineMenu";
import Gallery from "./components/Gallery";
import EventHero from "./components/EventHero";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <main className="with-navbar">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <History />
                <MenuPage />
                <Menu />
                <WineMenu />
                <Gallery />
                <EventHero />
              </>
            }
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
