import { Link } from 'react-router-dom';
import { navLinks } from '../constants/common';
import Logo from './Logo';
import { useState } from 'react';
import close from '../assets/images/close.svg';
import menu from '../assets/images/menu.svg';
import Drawer from './Drawer';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex justify-between items-center bg-zinc-800 p-2'>
            <Logo />

            <ul className="list-none customMediaQuery1:flex hidden justify-end items-center flex-1 mr-10">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins
                                font-normal
                                cursor-pointer
                                text-[16px]
                                ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                                text-white hover:text-amber-400`}
                    >
                        <Link to={nav.id}>{nav.title}</Link>
                    </li>
                ))}
            </ul>

            <div className="customMediaQuery1:hidden flex flex-1 justify-end items-center">
                {/* shows toggle icon based on its state */}
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={() => setToggle((prev) => !prev)}
                /> 

                <Drawer isOpen={toggle} navLinks={navLinks} toggleDrawer={setToggle} />
            </div>

        </nav>
    );
};

export default NavBar;