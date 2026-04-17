'use client';

import PhilippinesBlurb from "@/components/PhilippinesBlurb";
import { useEffect, useState } from "react";

export default function Home() {
  const [isBlurbOpen, setIsBlurbOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isExtraBlurbOpen, setIsExtraBlurbOpen] = useState(false);

  useEffect(() => {
    if (!windowWidth) {
      setWindowWidth(window.innerWidth);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

  }, []);

  /**
   * @description renders blurb about Manila. Presence also turns on canvas feature
   * @returns {JSX} - blurb component
   */
  const renderBlurb = () => {
    
    return (
      <div className="blurb">
        <p className="blurb-text">I miss the Philippines so much that this is more of a manifestation :). Do note that the photos, visible only on desktop, are of Nueva Ecija, Manila, and Puerto Princesa.</p>
      </div>
    )
  }

  /**
   * @description renders blurb about software blurb. 
   * @returns {JSX} - blurb component
   */
  const renderSoftwareBlurb = () => {
    return (
      <div className="blurb">
        <p className="blurb-text">something cool will happen if you click or hover on this... one day</p>
      </div>
    )
  }

  /**
   * @description renders photo blurb of philippines
   * @returns {JSX} - photo blurb component
   */
  const renderPhilippinesBlurb = () => {
    return <PhilippinesBlurb />
  }

  return (

    <div className="main-container">
        <div className="left-main-text">
          <p>
            I’m an <span className="text-primary hover:cursor-pointer hover:font-semibold" onMouseOver={() => { if (windowWidth < 768) return; setIsExtraBlurbOpen(true);}} onMouseOut={() => { if (windowWidth < 768) return; setIsExtraBlurbOpen(false);}}>artist</span> and <span className="text-primary hover:cursor-pointer hover:font-semibold" onMouseOver={() => { if (windowWidth < 768) return; setIsExtraBlurbOpen(true);}} onMouseOut={() => { if (windowWidth < 768) return; setIsExtraBlurbOpen(false);}}>ex-software engineer</span> based in Boston, Massachusetts and <span 
              className="highlight" 
              onMouseOver={() => {
                if (windowWidth < 768) return;
                setIsBlurbOpen(true);
              }}
              onMouseOut={() => {
                if (windowWidth < 768) return;
                setIsBlurbOpen(false)
              }}
              onClick={() => {
                const isOpen = isBlurbOpen;
                setIsBlurbOpen(!isOpen);
              }}
            >Baguio City, Philippines</span>.
          </p>
      <p className="contact">You can contact me at: <span className="link"><a href="mailto:kristinnefragata@outlook.com">kristinnefragata@outlook.com ⤴</a></span></p>
      <p className="link home-links"><a href="https://linkedin.com/in/krisfragata" target="_blank">linkedIn ⤴</a></p>
      {/* <p className="link home-links"><a href="https://github.com/krisfragata" target="_blank">github ⤴</a></p> */}
      {isBlurbOpen && renderBlurb()}
      {isBlurbOpen && renderPhilippinesBlurb()}
      {isExtraBlurbOpen && renderSoftwareBlurb()}
    </div>
    
    </div>
  );
}
