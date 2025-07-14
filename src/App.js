import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import PrivacyPolicy from './components/Disclosures/PrivacyPolicy';
import TermsConditions from './components/Disclosures/TermsConditions';
import CustomerRights from './components/Disclosures/CustomerRights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RootLayout from './components/Layout';
import FairPracticesCode from './components/Disclosures/FairPracticeCode';

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/customer-rights" element={<CustomerRights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fair-practice-code" element={<FairPracticesCode />} />
        </Routes>
        <Footer />
      </RootLayout>
    </Router>
  );
}

export default App;
