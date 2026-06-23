import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && <Home />}
    </>
  );
}

export default App;
