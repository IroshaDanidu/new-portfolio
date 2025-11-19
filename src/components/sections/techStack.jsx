"use client"
import React from 'react'
import SlideUp from '@/utlits/animations/slideUp';

const TechStack = () => {
    const techStack = [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Expo", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
        { name: "Laravel", logo: "https://laravel.com/img/logomark.min.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Tailwind CSS", logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
    ];

    return (
        <section className="tech-stack-area" style={{ padding: '80px 0', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <SlideUp>
                            <div className="section-title text-center" style={{ marginBottom: '60px' }}>
                                <p>Technologies</p>
                                <h2>Tech Stack & Tools</h2>
                            </div>
                        </SlideUp>
                    </div>
                </div>
                <SlideUp>
                    <div className="tech-stack-grid">
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                            gap: '20px',
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}>
                            {techStack.map((tech, index) => (
                                <div key={index} style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    padding: '15px 20px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    justifyContent: 'center'
                                }}>
                                    <img 
                                        src={tech.logo} 
                                        alt={tech.name}
                                        style={{ 
                                            width: '36px', 
                                            height: '36px', 
                                            marginRight: '10px',
                                            filter: 'brightness(1.2)',
                                            objectFit: 'contain'
                                        }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    <span style={{ 
                                        color: '#fff', 
                                        fontSize: '15px', 
                                        fontWeight: '500',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </SlideUp>
            </div>
        </section>
    )
}

export default TechStack