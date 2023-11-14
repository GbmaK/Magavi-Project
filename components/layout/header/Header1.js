import LanguageDropdown from "@/components/elements/LanguageDropdown"
import Link from "next/link"
import Sidebar from "../Sidebar"
import Image from "next/image"
import Contactanos from '/components/tools/Contactanos';

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header>
                <div id="sticky-header" className={`menu-area transparent-header ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo" style={{width: "250px", height: "150px"}}>
                                            <Link href="/"><img src="/assets/img/logo/logo_white.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li className="active tg-mega-menu-has-children"><Link href="#">Inicio</Link>
                                                </li>
                                                <li><Link href="/about">Nosotros</Link></li>
                                                <li className="Link"><Link href="#">Soluciones Implementadas</Link>
                                                </li>
                                                <li className="Link"><Link href="#">Proyectos en Desarrollo</Link>
                                                </li>
                                                <li><Link href="/contact"></Link></li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul className="list-wrap">
                                                {/* Utiliza el componente Contactanos en lugar del enlace directo */}
                                                <Contactanos />
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="menu-outer">
                                            <Sidebar />
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
