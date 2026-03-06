import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#home" className="logo">
                    <span className="gradient-text">Ayush</span> Sharma
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-socials">
                        <a href="https://github.com/Ayush-Sharma3011" target="_blank" rel="noreferrer" className="social-icon">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/ayush-sharma3011/" target="_blank" rel="noreferrer" className="social-icon">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav */}
                <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul className="mobile-nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="mobile-socials">
                        <a href="https://github.com/Ayush-Sharma3011" target="_blank" rel="noreferrer" className="social-icon">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/ayush-sharma3011/" target="_blank" rel="noreferrer" className="social-icon">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: var(--transition);
          padding: 1.5rem 0;
        }

        .header.scrolled {
          background: var(--nav-bg);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 1rem 0;
          border-bottom: 1px solid var(--card-border);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-color);
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: linear-gradient(90deg, var(--accent-color), var(--secondary-accent));
          transition: var(--transition);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-socials, .mobile-socials {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          color: var(--text-muted);
          transition: var(--transition);
        }

        .social-icon:hover {
          color: var(--accent-color);
          transform: translateY(-2px);
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-color);
          cursor: pointer;
        }

        .mobile-nav {
          display: none;
          position: fixed;
          top: 70px;
          left: 0;
          width: 100%;
          background: var(--nav-bg);
          backdrop-filter: blur(15px);
          padding: 2rem;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          transform: translateY(-150%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid var(--card-border);
        }

        .mobile-nav.open {
          transform: translateY(0);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .mobile-nav-links a {
          font-size: 1.25rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .mobile-nav {
            display: flex;
          }
        }
      `}</style>
        </header>
    );
};

export default Header;
