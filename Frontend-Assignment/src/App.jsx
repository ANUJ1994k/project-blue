import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FooterPage } from './components/FooterPage'
import { LandingPage } from './components/LandingPage'
import { ContentPage } from './components/ContentPage'
import { FormPage } from './components/FormPage'
import { PricingTable } from './components/PricingTable'


function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/ContentPage" element={<ContentPage />} />
        <Route path="/FormPage" element={<FormPage />} />
        <Route path="/PricingTable" element={<PricingTable />} />
        <Route path="/FooterPage" element={<FooterPage />} />
      </Routes>
      </Router>
  );
}


export default App
