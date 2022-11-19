import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import HeaderCtrlButton from "../HeaderCtrlButton/HeaderCtrlButton";
import LinkButton from "../LinkButton/LinkButton";

const navLinks = [
    { to: "/", name: "Home" },
    { to: "/goods", name: "Our Goods" },
    { to: "/impacts", name: "Impacts" },
];

const Header = () => {
    const [navMobileOpen, setNavMobileOpen] = useState(false);

    const toggleMobileNav = () => setNavMobileOpen((prev) => !prev);

    useEffect(() => {
        if (navMobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [navMobileOpen]);

    return (
        <div className='header'>
            {navMobileOpen && <div className='header__backdrop'></div>}

            <header
                className='header__container'
                style={{
                    "--h-bgc": navMobileOpen && "rgba(0,0,0,.2)",
                    "--h-height": navMobileOpen && "100vh",
                }}
                onClick={(e) => toggleMobileNav(e)}
            >
                <nav
                    id='mainNav'
                    className='header__navContainer flex'
                    style={{ "--navC-h": navMobileOpen ? "18em" : "3.6em" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='header__navTop flex'>
                        <Link to='/' className='header__logo ff-sans fw-black'>
                            WSF.
                        </Link>

                        <HeaderCtrlButton state={navMobileOpen} onClick={toggleMobileNav} />
                    </div>

                    <div className='header__nav flex'>
                        <ul className='header__navList flex'>
                            {navLinks.map((link, idx) => (
                                <li
                                    key={link.to}
                                    className='header__navItem ff-sans'
                                    style={{
                                        "--stagger": idx + 1,
                                        animationName: navMobileOpen ? "navListUp" : "navListDown",
                                    }}
                                >
                                    <NavLink className='header__navLink' to={link.to}>
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <LinkButton name='Get me some fruits' to={"/"} variant={"green"} />
                    </div>
                </nav>

                <div role='nav' className='header__nav--secondary' onClick={(e) => e.stopPropagation()}></div>
            </header>
        </div>
    );
};

export default Header;
