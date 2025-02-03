import { useState } from "react"
import logo from '../assets/logo1.png'
import { NAVIGATION_LINKS } from '../constants'
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMobilemenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobilemenuOpen);
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }
        setIsMobileMenuOpen(false);
    }
    return (
        <div>
            <nav className="fixed left-0 right-0 top-0 z-50">
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-1 backdrop-blur-lg lg:flex my-2 pr-3">
                    <div className="flex items-center justify-center gap-4">
                        <div>
                            <a href="#">
                                <img src={logo} alt="logo" width={120} />
                            </a>
                        </div>
                        <div>
                            <ul className="flex items-center gap-6">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index} className="hover:scale-125 transform">
                                        <a className="text-sm hover:text-yellow-400" href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="rounded-lg backdrop-blur-md lg:hidden">
                    <div className="flex items-center justify-between">
                        <div>
                            <a href="#">
                                <img src={logo} alt="logo" width={70} className="m-2" />
                            </a>
                        </div>
                        <div className="flex items-center">
                            <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                                {isMobilemenuOpen ? (
                                    <FaTimes className="m-2 h-6 w-5" />
                                ) : (
                                    <FaBars className="m-2 h-6 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMobilemenuOpen && (
                        <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="block w-full text-lg hover:text-yellow-400 text-center" onClick={(e) => handleLinkClick(e, item.href)}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar