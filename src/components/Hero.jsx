import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="greeting">Hi there, I'm</p>
          <h1 className="name">Ayush Sharma</h1>
          <h2 className="title">
            Passionate <span className="gradient-text">Full Stack Developer</span>
          </h2>
          <p className="description">
            I specialize in crafting high-quality, responsive web experiences.
            Currently diving deep into Backend Web Development to build robust, scalable applications from end to end.
          </p>

          <div className="cta-group">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="mailto:sharmaayush300424@gmail.com" className="btn btn-outline">
              Let's Talk <Download size={18} />
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="glow-orb"></div>
          <div className="image-wrapper glass-card">
            <img
              src="/Passport Size Photo.jpeg"
              alt="Ayush Sharma"
              className="profile-img"
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          padding-top: 100px;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .greeting {
          color: var(--accent-color);
          font-weight: 600;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .name {
          font-size: 4.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #fff, var(--text-muted));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title {
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-color);
        }

        .description {
          font-size: 1.125rem;
          color: var(--text-muted);
          max-width: 500px;
          margin-bottom: 2.5rem;
        }

        .cta-group {
          display: flex;
          gap: 1.5rem;
        }

        .hero-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .glow-orb {
          position: absolute;
          width: 300px;
          height: 300px;
          background: var(--accent-color);
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: pulse 4s infinite alternate;
        }

        .image-wrapper {
          position: relative;
          z-index: 10;
          padding: 1rem;
          border-radius: 50%;
          background: var(--card-bg);
        }

        .profile-img {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--card-border);
        }

        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.2; }
          100% { transform: scale(1.1); opacity: 0.4; }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .description {
            margin: 0 auto 2.5rem;
          }

          .cta-group {
            justify-content: center;
          }

          .name { font-size: 3.5rem; }
          .title { font-size: 1.75rem; }
          
          .hero-image-container {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
