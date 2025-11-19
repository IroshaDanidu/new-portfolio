import React from 'react'
import { RiBookLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'May 2025 - Present'} title={'Software Engineer'} institution={'The Natural Sapphire Company'} />
                                    <Card year={'Jul 2024 - Apr 2025'} title={'Software Engineer'} institution={'Adlux Software (Pvt) Ltd'} />
                                    <Card year={'Jan 2024 - Jun 2024'} title={'Associate Software Engineer'} institution={'Adlux Software (Pvt) Ltd'} />
                                    <Card year={'Jan 2021 - Jan 2022'} title={'Intern'} institution={'People\'s Bank, Sri Lanka'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2021 - 2025'} title={'BEng (Hons) Software Engineering'} institution={'University of Staffordshire'} />
                                    <Card year={'2021 - 2025'} title={'Bachelor\'s Physics'} institution={'University of Peradeniya, Sri Lanka'} />
                                    <Card year={'2017 - 2020'} title={'G.C.E Advanced Level (Science Stream)'} institution={'S. Thomas\' College, Bandarawela'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}