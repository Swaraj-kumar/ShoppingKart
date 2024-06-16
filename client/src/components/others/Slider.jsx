import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import CSS file for styling

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // 3 is the total number of slides
    }, 2000); // Change image every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const imageUrl1 = 'https://s.yimg.com/os/creatr-uploaded-images/2022-05/1cd0cb70-d6d0-11ec-bffb-4773eeb8ae79';
  const imageUrl2 = 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202209/01-hd02-b4-kv-pc-1440x640-2-sixteen_nine.jpg?size=1200:675';
  const imageUrl3 = 'https://rewardmobile.co.uk/wp-content/uploads/2023/09/Apple-iPhone-15-promo-banner-buy-now-scaled.jpg';

  return (
    <div className="slider-wrapper">
      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          <div className="slide">
            <img src={imageUrl1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={imageUrl2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={imageUrl3} alt="Slide 3" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Slider;
