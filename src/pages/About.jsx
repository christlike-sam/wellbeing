import abtImg from '../assets/abt.jpg';
import Team from './Team';
import './About.css'; 

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <header
        className="about-hero"
        style={{ backgroundImage: `url(${abtImg})` }}
      >
        <div className="hero-overlay">
          <h1>The Wellbeing Institute</h1>
          <p>
            We ensure Kenya’s Children Act moves from paper to practice, protecting the rights and wellbeing of every child.
          </p>
        </div>
      </header>

      {/* OUR STORY */}
      <section className="about-story">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            At the Wellbeing Institute, the Children Act is deeply personal. For decades, we have worked to advance the wellbeing of children and families across Kenya. In this Act, we saw more than a law - we saw a shared promise: a progressive, unifying platform that strengthens our resolve, aligns our mission, and boldly declares that every child’s life and dignity matter.
          </p>
          <img src={abtImg} alt="Children and community" className="story-img" />
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="about-team">
        <div className="container">
          <h2>Our Team</h2>
          <Team />
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="about-vision-mission">
        <div className="container">
          <h2>Vision & Mission</h2>
          <div className="vision-mission-cards">
            <div className="card">
              <h3>Vision</h3>
              <p>
                A Kenya where every child’s rights and wellbeing are realized through evidence-informed policy and governance.
              </p>
            </div>
            <div className="card">
              <h3>Mission</h3>
              <p>
                To generate, translate, and promote evidence that strengthens implementation of the Children Act and advances child wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
