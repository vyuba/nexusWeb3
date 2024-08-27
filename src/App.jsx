import { useEffect } from 'react';
import { gsap } from 'gsap';

import Loader from "./components/Loader";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.loader', {
      opacity: 0,
      duration: 2, // Duration of fade-out
      delay: 5,   // Stay visible for 20 seconds before fading out
      onComplete: () => {
        y: '-10000'
      }
    });

    tl.from('.app-content', {
      opacity: 1,
      duration: 2,
      ease: 'power3.out'
    });
  }, []);

  return (
    <>
      <div>
        <div className="loader">
          <Loader />
        </div>
        <div className="app-content">
          <Navbar />
          <div className="pt-32">
            <Home />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
