import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useScrollDirection from "../../utils/hooks/useScrollDirection";
import useViewport from "../../utils/hooks/useViewport";

import HeaderCtrlButton from "../HeaderCtrlButton/HeaderCtrlButton";
import ClickableComponentRound from "../ClickableComponentRound/ClickableComponentRound";
import Logo from "../Logo/Logo";

const navLinks = [
    { to: "/", name: "Home" },
    { to: "/goods", name: "Our Goods" },
    { to: "/impacts", name: "Impacts" },
];

const Header = () => {
    const [navMobileOpen, setNavMobileOpen] = useState(false);
    const direction = useScrollDirection();
    const vw = useViewport();

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
            {navMobileOpen && <div className='header__backdrop' onClick={toggleMobileNav}></div>}

            <header
                className='header__container'
                style={{
                    "--h-top": direction < 0 ? "-100%" : "0",
                }}
                onClick={vw < 1000 ? toggleMobileNav : () => 1}
            >
                <nav
                    id='mainNav'
                    className={`header__navContainer flex`}
                    style={{ "--navC-h": navMobileOpen ? "18em" : "3.6em" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='header__navTop flex'>
                        <Logo />

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
                                    <NavLink className='header__navLink fw-sm' to={link.to}>
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <ClickableComponentRound name='Get me some fruits' to={"/"} variant={"green"} />
                    </div>
                </nav>

                <div role='nav' className='header__nav--secondary' onClick={(e) => e.stopPropagation()}></div>
            </header>
        </div>
    );
};

export default Header;
