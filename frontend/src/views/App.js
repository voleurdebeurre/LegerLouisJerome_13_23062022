import React from 'react';
import '../assets/css/App.css';
import MainNav from '../components/MainNav';
import HeroContent from '../components/HeroContent';
import Features from '../components/Features';
import Footer from '../components/Footer';

function App() {
  return (
    <>
    <MainNav />
    <main>
      <HeroContent />
      <Features />
    </main>
    <Footer />
    </>
  );
}

export default App;
