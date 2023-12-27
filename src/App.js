import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Mainpage from "./pages/Mainpage";
import Portfoliopage from './pages/Portfoliopage';
import Contpage from './pages/Contpage';
import Intropage from './pages/Intropage'

import './styles/app.scss';

function App() {
 
  const [scrollAngle, setScrollAngle] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newAngle = scrollPosition / 5;

    setScrollAngle(newAngle);
    setScrollY(scrollPosition);
  };

  useEffect(() => {
    // 스크롤 이벤트에 대한 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    return () => {
      // 이벤트 리스너 제거
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [refMainpage, inViewMainpage] = useInView({ triggerOnce: true });
  const [refIntropage, inViewItropage] = useInView({ triggerOnce: true });
  const [refPortfoliopage, inViewPortfoliopage] = useInView({ triggerOnce: true });
  const [refContpage, inViewContpage] = useInView({ triggerOnce: true });

  return (
    <>
      <div className="background" style={{ background: `var(--angular_black, conic-gradient(from ${scrollAngle}deg at 50% 50%, #111 0deg, #1A1A1A 360deg))` }}></div>
      <div className="container">
        <div ref={refMainpage} className={`animated-section ${inViewMainpage ? 'visible' : ''}`}><Mainpage /></div>
        <div ref={refIntropage} className={`animated-section ${inViewItropage ? 'visible' : ''}`}><Intropage/></div>
        <div ref={refPortfoliopage} className={`animated-section ${inViewPortfoliopage ? 'visible' : ''}`}><Portfoliopage /></div>
        <div ref={refContpage} className={`animated-section ${inViewContpage ? 'visible' : ''}`}><Contpage /></div>
      </div>
    </>
  );
}

export default App;
