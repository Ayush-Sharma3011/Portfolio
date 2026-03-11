import React from 'react';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';

const DetailedAbout = () => {
    return (
        <section className="detailed-page">
            <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
                <div className="page-header">
                    <h1 className="page-title">About <span className="gradient-text">Me</span></h1>
                    <p className="page-subtitle">Passionate developer, continuous learner, and problem solver.</p>
                </div>

                <div className="about-content-grid">
                    <div className="about-main glass-card">
                        <div className="section-header">
                            <User className="gradient-text" size={28} />
                            <h2>My Journey</h2>
                        </div>
                        <div className="content-body">
                            <p>
                                Life is Easy! I am Ayush Sharma, a dedicated Full Stack Developer with a sharp eye for user interfaces and an eagerness to tackle complex logic on the back end. My journey in technology started with a deep curiosity about how things work, leading me to pursue a Bachelor of Technology in Computer Science and Engineering at Lovely Professional University.
                            </p>
                            <p>
                                I specialize in building responsive, accessible web applications using modern UI frameworks. Currently, I am diving deep into Backend Web Development to build robust, scalable applications from end to end. I thrive in environments where I can tackle complex problems and deliver elegant solutions.
                            </p>
                            <p>
                                I am open to collaborating with tech leads and peers on innovative projects. My goal is to build seamless web applications while continuously expanding my technical horizons.
                            </p>
                        </div>
                    </div>

                    <div className="experience-section glass-card">
                        <div className="section-header">
                            <Briefcase className="gradient-text" size={28} />
                            <h2>Experience</h2>
                        </div>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h3>MERN Stack Development Intern</h3>
                                        <span className="timeline-date">Sep 2025 - Nov 2025</span>
                                    </div>
                                    <h4 className="timeline-company">Infosys Springboard Virtual Internship 6.0</h4>
                                    <ul className="timeline-bullets">
                                        <li>Developed a MERN application with RESTful APIs and React, boosting feature delivery speed by 30%.</li>
                                        <li>Engineered secure authentication and CRUD for 5 core modules, cutting manual data handling by 40%.</li>
                                        <li>Executed an agile capstone project and technical modules within 12 weeks to earn official certification.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Add more experience items here if needed */}
                        </div>
                    </div>

                    <div className="education-section glass-card">
                        <div className="section-header">
                            <GraduationCap className="gradient-text" size={28} />
                            <h2>Education</h2>
                        </div>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h3>Bachelor of Technology - Computer Science</h3>
                                        <span className="timeline-date">Aug 2023 - Present</span>
                                    </div>
                                    <h4 className="timeline-company">Lovely Professional University</h4>
                                    <p>CGPA: 8.03</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .detailed-page {
                    min-height: 100vh;
                }
                .page-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .page-title {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }
                .page-subtitle {
                    color: var(--text-muted);
                    font-size: 1.1rem;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .about-content-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .about-main, .experience-section, .education-section {
                    padding: 2.5rem;
                }
                .section-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    border-bottom: 1px solid var(--card-border);
                    padding-bottom: 1rem;
                }
                .section-header h2 {
                    font-size: 1.75rem;
                    color: var(--text-color);
                }
                .content-body p {
                    color: var(--text-muted);
                    font-size: 1.05rem;
                    margin-bottom: 1rem;
                    line-height: 1.7;
                }
                
                /* Timeline Styles */
                .timeline {
                    position: relative;
                    padding-left: 2rem;
                }
                .timeline::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: var(--card-border);
                }
                .timeline-item {
                    position: relative;
                    margin-bottom: 2.5rem;
                }
                .timeline-item:last-child {
                    margin-bottom: 0;
                }
                .timeline-dot {
                    position: absolute;
                    left: -2.35rem;
                    top: 0.25rem;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    border: 2px solid var(--card-bg);
                }
                .timeline-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    margin-bottom: 0.5rem;
                }
                .timeline-header h3 {
                    font-size: 1.25rem;
                    color: var(--text-color);
                }
                .timeline-date {
                    color: var(--accent-color);
                    font-size: 0.9rem;
                    font-weight: 500;
                    background: rgba(59, 130, 246, 0.1);
                    padding: 0.2rem 0.6rem;
                    border-radius: 12px;
                }
                .timeline-company {
                    color: var(--text-muted);
                    font-size: 1.05rem;
                    margin-bottom: 1rem;
                    font-weight: 500;
                }
                .timeline-bullets {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    color: var(--text-muted);
                }
                .timeline-bullets li {
                    margin-bottom: 0.5rem;
                    line-height: 1.5;
                }
                
                @media (max-width: 768px) {
                    .timeline-header {
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                    .about-main, .experience-section, .education-section {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default DetailedAbout;
