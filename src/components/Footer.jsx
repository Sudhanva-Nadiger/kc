import Logo from './Logo';
import {footerContent, navLinks} from '../constants/common';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { address: addressDetail } = footerContent;
    return (
        <div className='flex flex-col mt-auto bg-zinc-700'>
            <footer className="flex sm:flex-row flex-col sm:items-center md:justify-evenly bg-zinc-800 px-10">
                <section className='flex flex-col gap-3'>
                    <Logo />

                    {/* address */}
                    <address className='text-neutral-500 text-ellipsis max-w-screen'>
                        <p className='whitespace-break-spaces'>{addressDetail.line1} ,</p>
                        <p className='whitespace-break-spaces'>{addressDetail.line2} ,</p>
                        <p className='whitespace-break-spaces'>{addressDetail.state} ,</p>
                        <p className='whitespace-break-spaces truncate'>
                            <a href={`mailto:${addressDetail.email}`}>
                                {addressDetail.email}
                            </a> ,
                        </p>
                        <p>{addressDetail.phone}</p>
                    </address>
                </section>

                <br />

                {/* quick links */}
                <ul className="list-none">
                    <h1 className='text-white mb-1'>Quick links</h1>
                
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins
                                font-normal
                                cursor-pointer
                                text-[16px]
                                ${index === navLinks.length - 1 ? 'mr-0' : 'pr-10'}
                                text-neutral-500 hover:text-white`}
                        >
                            <Link to={nav.id}>{nav.title}</Link>
                        </li>
                    ))}
                </ul>
                <br />
                {/* subscribe to news letter */}
                <div className="relative flex flex-col items-center gap-5">
                    <input 
                        type="email" id="simple-search" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Your Emial.." 
                        required 
                    />
                    <button 
                        type="submit" 
                        className="p-2.5 ml-2 text-sm font-medium text-white bg-amber-500 rounded-lg border border-amber-100 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <span>Subscribe</span>
                    </button>
                </div>
            
            </footer>
            <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 my-1" />
            <div className="text-sm flex justify-between items-center text-gray-500 dark:text-gray-400 px-3">
                <div>© {new Date().getFullYear()} 
                    <a href="#" className="hover:underline"></a>
                All Rights Reserved. | Kalkuli comforts </div>
                <a href="http://srisadguruhytech.in/" className="hover:underline">Designed by SriSadguru HyperTechnologies Pvt Ltd</a>
            </div>
        </div>
    );
};

export default Footer;