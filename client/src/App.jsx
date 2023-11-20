import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ProverbProvider } from './context/proverb.context';

import { GlobalStyle } from './global.styles';

import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';
import Navbar from './components/Navbar/navbar.component';

import Home from './pages/home.page';
import ProverbPage from './pages/proverbs.page';
import AboutPage from './pages/about.page';

function App() {
  return (
    <ProverbProvider>
      <Router>
        <GlobalStyle />
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/proverbs' element={<ProverbPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </ProverbProvider>
  );
}

export default App;
