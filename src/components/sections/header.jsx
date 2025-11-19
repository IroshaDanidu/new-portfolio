'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RiShakeHandsLine } from '@remixicon/react'
import { menuList } from '@/utlits/fackData/menuList'
import Image from 'next/image'

const Header = () => {
    const pathName = usePathname()
    const [isSticky, setisSticky] = useState(false)

    useEffect(() => {
        const navbar_collapse = document.querySelector(".navbar-collapse")
        navbar_collapse.classList.remove("show")
    }, [pathName])

    useEffect(() => {
        window.addEventListener("scroll", stickyHeader)
        return () => window.removeEventListener("scroll", stickyHeader)
    }, [])

    const stickyHeader = () => {
        const scrollTop = window.scrollY
        if (scrollTop > 85) {
            setisSticky(true)
        }
        else {
            setisSticky(false)
        }
    }
    return (
        <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center">
                        {/* <!-- START LOGO DESIGN AREA --> */}
                        <div className="logo-outer">
                            <div className="logo">
                                <Link href="/" style={{textDecoration: 'none'}}>
                                    <h4 style={{
                                        margin: 0, 
                                        color: '#fff', 
                                        fontWeight: '600',
                                        fontSize: '22px',
                                        letterSpacing: '0.5px',
                                        fontFamily: 'Poppins, sans-serif'
                                    }}>Irosha Rajapaksha</h4>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- / END LOGO DESIGN AREA -->
                        <!-- START NAV DESIGN AREA --> */}
                        <div className="nav-outer clearfix mx-auto">
                            {/* <!-- Main Menu --> */}
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo">
                                        <Link href="/" style={{textDecoration: 'none'}}>
                                            <h5 style={{
                                                margin: 0, 
                                                color: '#fff', 
                                                fontWeight: '600',
                                                fontSize: '18px',
                                                letterSpacing: '0.5px',
                                                fontFamily: 'Poppins, sans-serif'
                                            }}>Irosha</h5>
                                        </Link>
                                    </div>
                                    {/* <!-- Toggle Button --> */}
                                    <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="navbar-collapse collapse">
                                    <ul className="navigation onepage clearfix">
                                        {
                                            menuList.map(({ id, label, path }) => <li key={id}><Link href={path} className="nav-link-click" >{label}</Link></li>)
                                        }
                                    </ul>
                                </div>
                            </nav>

                        </div>
                        <div className="menu-btns">
                            <Link href="/contact" className="theme-btn">Let's Talk <RiShakeHandsLine size={15} /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header