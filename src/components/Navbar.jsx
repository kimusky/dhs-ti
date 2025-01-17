import React from 'react'; //impor data reak
import { Link } from 'react-scroll'; //impor fitur skrol
import Button from '../layouts/Button';

const Navbar = () => {

    return (
        <div>
            <div>
                <div className=' flex flex-row justify-between p-5 p-5 lg:px-32 px-5 bg-[#0F07B6] shadow-[0_3px_10px_rgb(0,0,0,0,2)]'>
                    <div className=' flex flex-row items-center cursor-pointer gap-2'>
                    <div className='navbar-logo'>
                            <img src='logo.png' />
                        </div>
                    </div>

                    <nav className=' text-white hidden md:flex flex-row items-center text-lg font-medium gap-14'>
                        <Link 
                            to="home" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className="group relative inline-block cursor-pointer hover:text-brightColor mr-4"
                        >
                            Home
                            <span className=' absolute inset-x-0 bottom-0 h-0.5 bg-[#E10001] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100' />
                            </Link>
                        <Link 
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className="group relative inline-block cursor-pointer hover:text-brightColor mr-4"
                    >
                        About Us
                        <span className=' absolute inset-x-0 bottom-0 h-0.5 bg-[#E10001] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100' />
                        </Link>
                        <Link 
                        to="dcf" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className="group relative inline-block cursor-pointer hover:text-brightColor mr-[16rem]"
                    >
                        DCF
                        <span className=' absolute inset-x-0 bottom-0 h-0.5 bg-[#E10001] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100' />
                        </Link>
                        <Link 
                        to="faq" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className="group relative inline-block cursor-pointer hover:text-brightColor"
                    >
                        FAQ
                        <span className=' absolute inset-x-0 bottom-0 h-0.5 bg-[#E10001] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100' />
                        </Link>
                        <Link 
                        to="study" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className="group relative inline-block cursor-pointer hover:text-brightColor mr-6"
                    >
                        Study Program
                        <span className=' absolute inset-x-0 bottom-0 h-0.5 bg-[#E10001] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100' />
                        </Link>
                    </nav>

                    <div>
                        <Button title="Register" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
