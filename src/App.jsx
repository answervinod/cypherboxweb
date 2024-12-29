import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Infrastructure from './pages/Infrastructure';
import Contact from './pages/Contact';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import About from './pages/About';
import Projects from './pages/Projects';
import Revenues from './pages/Revenues';
import DeDaS from './pages/DeDaS';
import AITwin from './pages/AITwin';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/dedas" element={<DeDaS />} />
          <Route path="/projects/ai-twin" element={<AITwin />} />
          <Route path="/revenues" element={<Revenues />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App; 