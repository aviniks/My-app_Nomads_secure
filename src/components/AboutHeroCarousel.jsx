import { useEffect, useState } from 'react';

import bannerOne from '../../banner/ChatGPT Image May 30, 2026, 06_23_43 PM.png';
import bannerTwo from '../../banner/ChatGPT Image May 30, 2026, 06_44_12 PM.png';
import bannerThree from '../../banner/ChatGPT Image May 30, 2026, 06_49_33 PM.png';

const BANNERS = [bannerOne, bannerTwo, bannerThree];

export default function AboutHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    BANNERS.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % BANNERS.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="about-banner-carousel" aria-label="Nomads Secure Group banner">
      {BANNERS.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Nomads Secure Group"
          className={index === activeIndex ? 'active' : undefined}
          draggable="false"
        />
      ))}
    </section>
  );
}
