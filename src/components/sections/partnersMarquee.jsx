import React from 'react'

const PartnersMarquee = () => {
    return (
        <div className="about-content-part-bottom">
            <h2>Company I Worked With</h2>
            <div className="company-list">
                <div className="company-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '25px', alignItems: 'center', justifyItems: 'center'}}>
                    <img src={"/images/client-logos/company-logo-4.png"} alt="Client company logo - Technology solutions partnership" style={{height: '80px', width: 'auto', objectFit: 'contain'}} />
                    <img src={"/images/client-logos/logo (1).png"} alt="Client company logo" style={{height: '80px', width: 'auto', objectFit: 'contain'}} />
                    <img src={"/images/client-logos/logo (2).png"} alt="Client company logo" style={{height: '80px', width: 'auto', objectFit: 'contain'}} />
                    <img src={"/images/client-logos/dc-logo.png"} alt="DC - Client company logo" style={{height: '80px', width: 'auto', objectFit: 'contain'}} />
                    <img src={"/images/client-logos/2r0slkRrDlV3fvwTLsoln6KgHBv.svg"} alt="Camera LK - Client company logo" style={{height: '80px', width: 'auto', objectFit: 'contain'}} />
                    <img src={"/images/client-logos/logo (3).png"} alt="Client company logo" style={{height: '80px', width: 'auto', objectFit: 'contain'}} />
                    <img src={"/images/client-logos/logo.png"} alt="Client company logo" style={{height: '80px', width: 'auto', objectFit: 'contain'}} />
                    <img src={"/images/client-logos/sapphire-logo.svg"} alt="Sapphire - Client company logo" style={{height: '80px', width: 'auto', objectFit: 'contain'}} />
                    <img src={"/images/client-logos/company-logo-2.png"} alt="Client company logo - Professional business partnership" style={{height: '80px', width: 'auto', objectFit: 'contain'}} />
                    <img src={"/images/client-logos/cbs-logo.svg"} alt="CBS - Client company logo" style={{height: '80px', width: 'auto', objectFit: 'contain'}} />
                    <img src={"/images/client-logos/Logo+2025+-+Transparent+Background (1).webp"} alt="2025 Logo - Client company" style={{height: '80px', width: 'auto', objectFit: 'contain'}} />
                </div>
            </div>
        </div>
    )
}

export default PartnersMarquee