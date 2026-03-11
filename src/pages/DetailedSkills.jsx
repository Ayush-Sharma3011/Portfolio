import React from 'react';
import { Database, Layout, Code2, Cpu, Wrench, Users } from 'lucide-react';

const DetailedSkills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: <Code2 size={24} className="category-icon" />,
            skills: ['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Dart', 'PHP']
        },
        {
            title: 'Technology & Frameworks',
            icon: <Layout size={24} className="category-icon" />,
            skills: ['MERN Stack', 'RESTful APIs', 'Socket.io', 'Tailwind CSS', 'Angular', 'Chart.js', 'React.js', 'Node.js']
        },
        {
            title: 'Tools & Platforms',
            icon: <Wrench size={24} className="category-icon" />,
            skills: ['Amazon Web Services (AWS)', 'MySQL', 'Flutter', 'Mongo DB', 'Git', 'GitHub']
        },
        {
            title: 'Soft Skills',
            icon: <Users size={24} className="category-icon" />,
            skills: ['Problem-Solving', 'Collaborating', 'Time Management', 'Adaptability', 'Leadership']
        }
    ];

    return (
        <section className="detailed-page">
            <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
                <div className="page-header">
                    <h1 className="page-title">My <span className="gradient-text">Skills</span></h1>
                    <p className="page-subtitle">A comprehensive overview of my technical expertise and capabilities.</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="glass-card category-card">
                            <div className="category-header">
                                {category.icon}
                                <h2>{category.title}</h2>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
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
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }
                .category-card {
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .category-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    border-bottom: 1px solid var(--card-border);
                    padding-bottom: 1rem;
                }
                .category-header h2 {
                    font-size: 1.5rem;
                    color: var(--text-color);
                }
                .category-icon {
                    color: var(--accent-color);
                }
                .skill-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }
                .skill-tag {
                    background: rgba(59, 130, 246, 0.1);
                    color: var(--text-color);
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-size: 0.9rem;
                    border: 1px solid rgba(59, 130, 246, 0.2);
                    transition: all 0.3s ease;
                }
                .skill-tag:hover {
                    background: var(--accent-color);
                    color: white;
                    transform: translateY(-2px);
                }
            `}</style>
        </section>
    );
};

export default DetailedSkills;
