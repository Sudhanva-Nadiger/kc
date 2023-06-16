import { motion } from 'framer-motion';
import { footerContent } from '../../constants/common';

const index = () => {
    const { address: addressDetail } = footerContent;
    return (
        <motion.div
            variants={{
                initial: { x: '100%', opacity: 0 },
                enter: { x: 0, opacity: 1, transition: {duration: 0.5, ease: 'easeInOut'} },
                exit: { x: '-100%', opacity: 0, transition: {duration: 0.5, ease: 'easeInOut'} }
            }}

            className='flex gap-10 flex-wrap items-center justify-center'
        >
            <div>
                <section className='flex flex-col gap-3'>
                    {/* address */}
                    <address className='text-neutral-500 text-ellipsis max-w-screen'>
                        <p className='whitespace-break-spaces'>{addressDetail.line1} ,</p>
                        <p className='whitespace-break-spaces'>{addressDetail.line2} ,</p>
                        <p className='whitespace-break-spaces'>{addressDetail.state} ,</p>
                        <br />
                        <p className='whitespace-break-spaces truncate'>
                            <a href={`mailto:${addressDetail.email}`}>
                                {addressDetail.email}
                            </a> ,
                        </p>
                        <p>{addressDetail.phone}</p>
                    </address>
                </section>
            </div>
            <div>
                <h1 className='py-3 px-0'>Got something to tell... ?</h1>
            
                <form className='flex flex-col my-5'>
                    {/* name input */}
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 nonetext-white">Your Name</label>
                    <div className="relative">
                        <input required type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  nonebg-gray-700 noneborder-gray-600 noneplaceholder-gray-400 nonetext-white nonefocus:ring-blue-500 nonefocus:border-blue-500" placeholder="johndoe" />
                    </div>

                    {/* email input */}
                    <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 nonetext-white">Your Email</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 nonetext-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </div>
                        <input required type="email" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  nonebg-gray-700 noneborder-gray-600 noneplaceholder-gray-400 nonetext-white nonefocus:ring-blue-500 nonefocus:border-blue-500" placeholder="johndoe@gmail.com" />
                    </div>

                    {/* message input */}
                    <div className='mt-6'>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 nonetext-white">Your message</label>
                        <textarea required id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 nonebg-gray-700 noneborder-gray-600 noneplaceholder-gray-400 nonetext-white nonefocus:ring-blue-500 nonefocus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <br />
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center nonebg-blue-600 nonehover:bg-blue-700 nonefocus:ring-blue-800">
                    Send
                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default index;