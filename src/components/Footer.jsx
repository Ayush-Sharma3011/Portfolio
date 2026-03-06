import React from 'react';
import { Code, MapPin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#home" className="logo">
                            <span className="gradient-text">Ayush</span> Sharma
                        </a>
                        <p className="footer-desc">
                            Building high-quality, responsive web experiences. Dedicated to continuous learning and open-source contribution.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>
                                <Mail size={16} />
                                <a href="mailto:sharmaayush300424@gmail.com">sharmaayush300424@gmail.com</a>
                            </li>
                            <li>
                                <MapPin size={16} />
                                <span>India</span>
                            </li>
                            <li>
                                <Code size={16} />
                                <a href="https://github.com/Ayush-Sharma3011" target="_blank" rel="noreferrer">GitHub Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Ayush Sharma. All rights reserved.</p>
                    <p className="credits">
                        Designed & Built with <span className="heart">❤</span> using React
                    </p>
                </div>
            </div>

            <style>{`
        .footer {
          background: var(--bg-color-light);
          border-top: 1px solid var(--card-border);
          padding: 4rem 0 2rem;
          margin-top: 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        .footer-brand .logo {
          font-size: 1.75rem;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .footer-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 350px;
          line-height: 1.7;
        }

        .footer-links h4,
        .footer-contact h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-color);
        }

        .footer-links ul,
        .footer-contact ul {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a,
        .footer-contact a,
        .footer-contact span {
          color: var(--text-muted);
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .footer-links a:hover,
        .footer-contact a:hover {
          color: var(--accent-color);
          padding-left: 5px;
        }

        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-muted);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .credits .heart {
          color: #ef4444;
          font-size: 1.1rem;
        }

        @media (max-width: 992px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          
          .footer-desc {
            max-width: 100%;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
