import { motion } from 'framer-motion';
import Team from './Team';
import HeroSlideshow from './Slideshow.jsx';
import '../components/Home.css';

// Import images (place these in src/assets/)

import dialogueImg from '../assets/dialogue.jpg';
import dtImg from '../assets/dt.jpg';
import eaImg from '../assets/ea.jpg';
import pkImg from '../assets/pk.jpg';
import icImg from '../assets/ic.jpg';


const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
};


const Programs = () => {
  return (
    <div>
     
     {/* HOW WE WORK */}
      <section id="how-we-work" className="section bg-slate-50">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How We Work
        </motion.h2>
        <div className="section-grid md:grid-cols-3 mt-8">
          {[
            
            {
              img: dtImg,
              title: 'Data Tools',
              text: 'We develop tools that make child-related data accessible, usable, and visible. These include indicator trackers, policy compliance maps, and open-data dashboards.',
            },
            {
              img: eaImg,
              title: 'Evidence And Analysis',
              text: 'We collect and analyse data to understand how the Children Act is being implemented across institutions and counties.',
            },
            {
              img: pkImg,
              title: 'Public Knowledge',
              text: 'We publish the annual State of the Child in Kenya Report, policy briefs, and simplified dashboards.',
            },
            {
              img: dialogueImg,
              title: 'Dialogue',
              text: 'We convene forums where children, policymakers, and communities reflect on progress and challenges.',
            },
            {
              img: icImg,
              title: 'Independence And Credibility',
              text: 'Our multidisciplinary team ensures all findings are objective, rigorous, and actionable.',
            },
          ].map((item, i) => (
            <motion.article
              key={item.title}
              className="card"
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative h-44 md:h-52 overflow-hidden">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

    
    
    </div>
  );
};

export default Programs;
