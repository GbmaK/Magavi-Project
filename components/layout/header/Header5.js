import Link from "next/link"
import Image from "next/image"

export default function Header5({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header>
                <div id="sticky-header" className={`menu-area transparent-header ${scroll ? "sticky-menu" : ""}`} style={{background: "purple", height: "12vh"}}>
                    <div className="container custom-container">
                        <div className="row ">
                            <div className="col-10">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo" style={{width: "17vh", height: "12vh"}}>
                                            <Link href="/"><img src="/assets/img/logo/logo_white.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li><Link href="/sections/section1">Sección 1</Link></li>
                                                <li><Link href="/sections/section2">Sección 2</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="logo" style={{width: "290px", height: "200px"}}>
                                            <Link href="/"><img src="/assets/img/logo/logo_white.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="menu-outer">
                                            <div className="navbar-wrap main-menu d-none d-lg-flex">
                                                <ul className="navigation">
                                                    <li><Link href="/sections/section1">Sección 1</Link></li>
                                                    <li><Link href="/sections/section2">Sección 2</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
