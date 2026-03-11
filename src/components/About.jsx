import React from 'react';
import { Code, Server, User, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'C++', level: 75 },
    { name: 'PHP', level: 65 }
  ];

  const cards = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      desc: 'Building responsive, accessible web applications with modern UI frameworks.'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Engineering',
      desc: 'Currently learning backend development to create solid APIs and data structures.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Open Source',
      desc: 'Enthusiastic about contributing to the open-source community.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>About Me</h2>
          <Link to="/about" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
            Read More <ArrowRight size={16} />
          </Link>
        </div>

        <div className="about-grid">
          <div className="about-text glass-card">
            <div className="about-header">
              <User className="gradient-text" size={28} />
              <h3>Who am I?</h3>
            </div>
            <p>
              Life is Easy! I am Ayush Sharma, a dedicated Full Stack Developer with a sharp eye for user interfaces and an eagerness to tackle complex logic on the back end.
            </p>
            <p>
              I am open to collaborating with tech leads and peers on innovative projects. My goal is to build seamless web applications while continuously expanding my technical horizons.
            </p>

            <div className="skills-container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h4 className="skills-title" style={{ marginBottom: 0 }}>Core Skills</h4>
                <Link to="/skills" className="text-link" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>
                  View Detailed Skills <ArrowRight size={14} />
                </Link>
              </div>
              <div className="skills-list">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="feature-cards">
            {cards.map((card, idx) => (
              <div key={idx} className="glass-card feature-card">
                <div className="feature-icon">{card.icon}</div>
                <h4 className="feature-title">{card.title}</h4>
                <p className="feature-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .about-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .about-header h3 {
          font-size: 1.75rem;
          color: var(--text-color);
        }

        .about-text p {
          color: var(--text-muted);
          font-size: 1.05rem;
        }

        .skills-container {
          margin-top: 1rem;
        }

        .skills-title {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--text-color);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .progress {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-color), var(--secondary-accent));
          border-radius: 10px;
          transition: width 1s ease-in-out;
        }

        .feature-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .feature-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feature-icon {
          color: var(--accent-color);
          background: rgba(59, 130, 246, 0.1);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }

        .feature-title {
          font-size: 1.25rem;
          color: var(--text-color);
        }

        .feature-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
