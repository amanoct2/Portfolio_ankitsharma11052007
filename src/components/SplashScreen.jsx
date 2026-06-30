import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fade out slightly before the 2-second mark for a smooth transition
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    // Call onComplete after 2 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`splash-screen ${isFadingOut ? "fade-out" : ""}`}>
      <div className="splash-content">
        <h1 className="splash-name">Ankit.dev</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
