import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const repoList = [
        {
            name: 'Healthmate-pro',
            desc: 'A health-focused application designed to help users manage their personal well-being metrics.',
            lang: 'HTML/Web',
            url: 'https://github.com/Ayush-Sharma3011/Healthmate-pro',
            stars: 1,
            forks: 0
        },
        {
            name: 'AI-chatBot',
            desc: 'An interactive chatbot implementation utilizing modern semantic web and styling.',
            lang: 'CSS/JS',
            url: 'https://github.com/Ayush-Sharma3011/AI-chatBot',
            stars: 0,
            forks: 1
        },
        {
            name: 'boost_up_app',
            desc: 'A C++ application intended for performance enhancement and resource management.',
            lang: 'C++',
            url: 'https://github.com/Ayush-Sharma3011/boost_up_app',
            stars: 1,
            forks: 0
        },
        {
            name: 'Flutter-1st-Project',
            desc: 'Initial explorations and foundational application building using the Flutter framework.',
            lang: 'Dart/C++',
            url: 'https://github.com/Ayush-Sharma3011/Flutter-1st-Project',
            stars: 0,
            forks: 0
        },
        {
            name: 'Pixel-Pallets-Project',
            desc: 'A PHP-based web project featuring robust backend structures and logic processing.',
            lang: 'PHP',
            url: 'https://github.com/Ayush-Sharma3011/Pixel-Pallets-Project',
            stars: 0,
            forks: 2
        },
        {
            name: 'Real-Time-Process-Monitoring...',
            desc: 'A comprehensive monitoring dashboard leveraging TypeScript for real-time visualization.',
            lang: 'TypeScript',
            url: 'https://github.com/Ayush-Sharma3011/Real-Time-Process-Monitoring-Dashboard',
            stars: 0,
            forks: 2
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Work</h2>

                <div className="projects-grid">
                    {repoList.map((repo, idx) => (
                        <div key={idx} className="glass-card project-card">
                            <div className="project-top">
                                <div className="folder-icon">
                                    <Github size={32} />
                                </div>
                                <div className="project-links">
                                    <a href={repo.url} target="_blank" rel="noreferrer" className="icon-link">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="project-title">{repo.name}</h3>
                            <p className="project-desc">{repo.desc}</p>

                            <div className="project-bottom">
                                <span className="project-lang">{repo.lang}</span>
                                <div className="project-stats">
                                    {repo.stars > 0 && (
                                        <span className="stat"><span className="stat-icon">★</span> {repo.stars}</span>
                                    )}
                                    {repo.forks > 0 && (
                                        <span className="stat"><span className="stat-icon">⑂</span> {repo.forks}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="view-more">
                    <a href="https://github.com/Ayush-Sharma3011" target="_blank" rel="noreferrer" className="btn btn-primary">
                        View All on GitHub
                    </a>
                </div>
            </div>

            <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
        }

        .project-card:hover .project-title {
          color: var(--accent-color);
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .folder-icon {
          color: var(--accent-color);
        }

        .icon-link {
          color: var(--text-muted);
        }

        .icon-link:hover {
          color: var(--accent-color);
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 1rem;
          transition: var(--transition);
        }

        .project-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          flex-grow: 1;
          margin-bottom: 1.5rem;
        }

        .project-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .project-lang {
          font-family: monospace;
          color: var(--secondary-accent);
          background: rgba(139, 92, 246, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }

        .project-stats {
          display: flex;
          gap: 1rem;
        }

        .stat-icon {
          margin-right: 0.25rem;
        }

        .view-more {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Projects;
