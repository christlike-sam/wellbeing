import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Slideshow.css'; // Separate CSS for slideshow

import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

const AUTO_PLAY_DELAY = 7000;

const HERO_SLIDES = [
  {
    img: hero1,
    lines: [
      "Turning the Children Act into measurable progress",
      
    ],
    subtitle:
      "We are Kenya’s independent think tank dedicated to tracking how the Children Act is being implemented - transforming words on paper into real change in children’s lives."
  },
  {
    img: hero2,
    lines: ["Quick Intro"],
    subtitle:
      "The Wellbeing Institute generates, translates, and shares evidence on how the Children Act is being implemented across Kenya."
  },
  {
    img: hero3,
    lines: ["Our Team"],
    subtitle:
      "Our team of dedicated experts works to ensure that the rights and protections promised in the Children Act move from words on paper to lived experiences for Kenya’s children."
  }
];

const fadeVariant = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } }
};

const lineVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.8, ease: 'easeOut' }
  })
};

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const slides = useMemo(() => HERO_SLIDES, []);

  // Autoplay
  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), AUTO_PLAY_DELAY);
    return () => clearTimeout(t);
  }, [index, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % slides.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + slides.length) % slides.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [slides.length]);

  return (
    <header className="hero-section">
      <AnimatePresence initial={false} mode="wait">
        {slides.map((slide, i) =>
          i === index ? (
            <motion.div key={i} variants={fadeVariant} initial="initial" animate="enter" exit="exit" className="hero-slide">
              <motion.img src={slide.img} alt={`Slide ${i + 1}`} className="hero-image" />
              <div className="hero-overlay" />

              <div className="hero-text-container">
                <motion.div className="hero-text-block">
                  {slide.lines.map((line, idx) => (
                    <motion.h1 key={idx} custom={idx} variants={lineVariant} initial="hidden" animate="visible" className="hero-title">
                      {line}
                    </motion.h1>
                  ))}
                  <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: slide.lines.length * 0.25, duration: 0.8 }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  <div className="hero-buttons">
                    <a href="#how-we-work" className="btn-primary">
                      Learn how we work
                    </a>
                    <a href="#contact" className="btn-secondary">
                      Partner with us
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* pager */}
      <div className="hero-pager">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`pager-dot ${i === index ? 'active' : ''}`} />
        ))}
      </div>
    </header>
  );
}
