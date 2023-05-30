import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const ModernDrawer = ({isOpen, toggleDrawer, navLinks}) => {
    return (
        <Drawer
            enableOverlay={false}
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
            style={{
                backgroundColor:  'rgb(39 39 42 / var(--tw-bg-opacity))',
            }}
        >
            <ul className="list-none flex flex-col justify-center items-center">
                <Logo />
                <br/>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins
                font-normal
                cursor-pointer
                text-[16px]
                flex justify-center
                hover:text-amber-400
                ${index === navLinks.length - 1 ? 'mb-0 ' : 'mb-4 border-b-[0.5px] w-full'} text-white`}
                    >
                        <Link className='pb-1' to={nav.id}>{nav.title}</Link>
                    </li>
                ))}
            </ul>
        </Drawer>
    );
};



export default ModernDrawer;