import { RiMailLine, RiMapPinLine, RiPhoneLine, RiDownloadLine } from '@remixicon/react'
import React from 'react'
import Link from 'next/link'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactOption = () => {
    return (
        <div className="col-lg-4">
            <SlideUp>
                <div className="contact-content-part">
                    <SlideUp delay={2}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i> <RiMapPinLine size={20} /></i>
                            </div>
                            <h2>Location:</h2>
                            <p>Bandarawela, Sri Lanka</p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={3}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                            <div className="contact-icon">
                                <i> <RiPhoneLine size={20} /></i>
                            </div>
                            <h2>Mobile:</h2>
                            <p>+94 77 68 40 032</p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={4}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                            <div className="contact-icon">
                                <i> <RiMailLine size={20} /></i>
                            </div>
                            <h2>Email:</h2>
                            <p>iro7899rajapaksha@gmail.com</p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={5}>
                        <div className="contact-cv-download" style={{marginTop: '30px', textAlign: 'center'}}>
                            <Link href="#" className="theme-btn" style={{padding: '8px 16px', fontSize: '14px'}}>
                                Download CV <i><RiDownloadLine size={14} /></i>
                            </Link>
                        </div>
                    </SlideUp>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactOption