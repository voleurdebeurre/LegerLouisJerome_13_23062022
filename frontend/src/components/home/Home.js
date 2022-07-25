import React from 'react';
import './home.css';
import MainNav from "../MainNav";
import HeroContent from './HeroContent';
import Features from './Features';

function Home() {
    return (
        <>
            <MainNav />
            <main>
                <HeroContent />
                <Features />
            </main>
        </>
    );
}

export default Home;
