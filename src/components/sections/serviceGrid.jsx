import React from 'react'
import { RiCodeSSlashLine, RiSmartphoneLine, RiDatabaseLine, RiCloudLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Technical Skills</p>
                                    <h2>My Expertise</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiCodeSSlashLine size={60} />} title={"Full-Stack Development"} description={"Expert in Laravel, React.js, Vue.js, and RESTful API development for scalable web applications."} />
                        <Card id={2} icon={<RiSmartphoneLine size={60} />} title={"Mobile Development"} description={"Building cross-platform mobile apps with React Native and Expo for iOS and Android platforms."} />
                        <Card id={3} icon={<RiDatabaseLine size={60} />} title={"Database & Backend"} description={"MySQL optimization, Redis caching, and efficient backend systems with Laravel and PHP."} />
                        <Card id={4} icon={<RiCloudLine size={60} />} title={"Cloud & DevOps"} description={"AWS S3, Docker, Laravel Forge, and Linux server management for scalable deployments."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-6 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}