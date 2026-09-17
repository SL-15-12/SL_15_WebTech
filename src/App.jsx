import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Student from './components/Student.jsx';
import InfoBox from './components/InfoBox.jsx';
import Header from "./components/Header.jsx";
import Technology from "./components/Technology.jsx";
import Footer from "./components/Footer.jsx";
import Navigation from "./components/Navigation.jsx";



function App() {
 return(
 <>
      <Header />

      <Navigation/>

      <main>

        <Student />

        <InfoBox />

        <Technology />

      </main>

      <Footer />
    </>
 );
  
}

export default App
