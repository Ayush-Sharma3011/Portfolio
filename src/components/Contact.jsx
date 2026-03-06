import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-wrapper glass-card">
                    <div className="contact-info">
                        <h3>Let's build something amazing together</h3>
                        <p>
                            Whether you have a question, a project proposal, or just want to say hi,
                            I'll try my best to get back to you!
                        </p>

                        <div className="contact-details">
                            <a href="mailto:sharmaayush300424@gmail.com" className="contact-item">
                                <div className="icon-box"><Mail size={20} /></div>
                                <span>sharmaayush300424@gmail.com</span>
                            </a>
                            <div className="contact-item">
                                <div className="icon-box"><MapPin size={20} /></div>
                                <span>India</span>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a href="https://github.com/Ayush-Sharma3011" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/ayush-sharma3011/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <style>{`
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          padding: 3rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
        }

        .contact-info h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-color);
        }

        .contact-info p {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-color);
          font-size: 1.1rem;
          transition: var(--transition);
        }

        .contact-item:hover {
          color: var(--accent-color);
        }

        .icon-box {
          width: 45px;
          height: 45px;
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-socials {
          display: flex;
          gap: 1.5rem;
          margin-top: auto;
        }

        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--bg-color-light);
          color: var(--text-color);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          border: 1px solid var(--card-border);
        }

        .social-link:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-5px);
          border-color: var(--accent-color);
          box-shadow: 0 10px 20px var(--accent-glow);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 500;
          color: var(--text-color);
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--card-border);
          border-radius: 0.5rem;
          color: var(--text-color);
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-color);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        .submit-btn {
          margin-top: 1rem;
          justify-content: center;
          padding: 1rem;
        }

        @media (max-width: 992px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            padding: 2rem;
            gap: 3rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Contact;
