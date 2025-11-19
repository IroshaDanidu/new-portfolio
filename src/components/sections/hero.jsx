'use client'
import React from 'react'
import Link from 'next/link';
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.png"} alt="About Me" />
                                <h2>Irosha Rajapaksha</h2>
                                <p>Full-stack Software Engineer</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link href="https://linkedin.com/in/irosha-rajapaksha"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link href="https://github.com/iroshaDanidu"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p style={{fontSize: '18px', marginBottom: '15px', color: 'rgba(255, 255, 255, 0.8)'}}>Hello There! 👋</p>
                                <h2 style={{fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '25px', fontWeight: '700'}}>
                                    I'm <span style={{color: '#00d4ff', background: 'linear-gradient(45deg, #00d4ff, #0099cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Irosha Rajapaksha</span>, 
                                    <br />a full-stack software engineer.
                                </h2>
                                <div className="adress-field" style={{marginBottom: '30px'}}>
                                    <div style={{
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        padding: '15px 20px', 
                                        backgroundColor: 'rgba(0, 212, 255, 0.1)', 
                                        borderRadius: '12px', 
                                        border: '1px solid rgba(0, 212, 255, 0.3)',
                                        marginBottom: '25px'
                                    }}>
                                        <i style={{marginRight: '10px', color: '#00d4ff'}}><RiCircleFill size={12} /></i>
                                        <span style={{fontSize: '16px', color: '#fff', fontWeight: '500'}}>
                                            Have a project idea? Let's Talk! 💡
                                        </span>
                                    </div>
                                </div>
                                <div className="hero-btns">
                                    <Link 
                                        href="mailto:iro7899rajapaksha@gmail.com" 
                                        className="theme-btn"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '12px 25px',
                                            backgroundColor: '#00d4ff',
                                            color: '#000',
                                            borderRadius: '8px',
                                            fontWeight: '600',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            border: 'none'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#0099cc';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = '#00d4ff';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        Let's Talk ✨
                                    </Link>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <PartnersMarquee />
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero