import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ProverbProvider } from './context/proverb.context';

import { GlobalStyle } from './global.styles';

import Header from './components/Header/header.component';
import Navbar from './components/Navbar/navbar.component';

import Home from './pages/Home/home.page';
import ProverbPage from './pages/Proverbs/proverbs.page';
import AboutPage from './pages/About/about.page';

function App() {
  return (
    <ProverbProvider>
      <Router basename='/swedish_proverbs_final'>
        <GlobalStyle />
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/proverbs' element={<ProverbPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>
    </ProverbProvider>
  );
}

export default App;
