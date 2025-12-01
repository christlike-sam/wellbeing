import aboutImg from '../assets/about-hero.jpg';
import Team from './Team';

const About = () => {
  return (
    <div className="page-container">

      {/* HERO SECTION */}
      <div className="hero" style={{ backgroundImage: `url(${aboutImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1>About The Wellbeing Institute</h1>
        <p>We ensure Kenya’s Children Act moves from paper to practice, protecting the rights and wellbeing of every child.</p>
      </div>

      {/* OUR STORY */}
      <section>
        <h2>Our Story</h2>
        <p>At the Wellbeing Institute, the Children Act is deeply personal. For decades, we have worked to advance the wellbeing of children and families across Kenya. In this Act, we saw more than a law - we saw a shared promise: a progressive, unifying platform that strengthens our resolve, aligns our mission, and boldly declares that every child’s life and dignity matter.
</p>
        <img src={aboutImg} alt="Children and community" style={{ width: '100%', borderRadius: '10px', marginTop: '1rem' }} />
      </section>

      {/* OUR TEAM */}
      
     <Team/>

      {/* VISION & MISSION */}
      <section>
        <h2>Vision & Mission</h2>
        <div className="vision-mission" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1rem' }}>
          <div className="box" style={{ flex: '1 1 300px', padding: '1rem', border: '1px solid #ddd', borderRadius: '10px' }}>
            <h3>Vision</h3>
            <p>A Kenya where every child’s rights and wellbeing are realized through evidence-informed policy and governance.</p>
          </div>
          <div className="box" style={{ flex: '1 1 300px', padding: '1rem', border: '1px solid #ddd', borderRadius: '10px' }}>
            <h3>Mission</h3>
            <p>To generate, translate, and promote evidence that strengthens implementation of the Children Act and advances child wellbeing.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
