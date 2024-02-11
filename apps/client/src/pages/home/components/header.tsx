import { FacebookLogo, LinkedinLogo, List, TwitterLogo, X } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };



  const closeMenu = () => {
    setMenuVisible(false);
  };


  return (
    <>
      <nav
        className={`flex justify-between py-4  px-5 lg:px-20  fixed top-0 w-full z-10 bg-secondary ${
          scrolling ? '' : 'bg-secondary-accent'
        }`}
      >
          <a href="#home" >
          <div className="font-semibold text-2xl md:text-3xl">InternVista</div>
        </a>
       
        {/* Menu icon for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuVisible ? <X size={32} /> : <List size={32} />}
          </button>
        </div>
        {/* Navigation links */}
        <div className={`md:flex lg:hidden space-x-4 text-white pt-3 ${menuVisible ? 'block' : 'hidden'}`} style={{ transition: 'top 0.3s', top: menuVisible ? '62px' : '-100vh', position: 'absolute', left: '0', right: '0', backgroundColor: 'rgba(0, 0, 0, 0.9)', zIndex: 100 }}>
          <button onClick={toggleMenu} className="absolute top-4 right-4 ">
            {/* <X size={24} /> */}
          </button>
          <a href="#home"  onClick={closeMenu} className="block py-2 px-4 hover:text-gradient">
            Home
          </a>
          <a href="#about" onClick={closeMenu} className="block py-2 px-4 hover:text-gradient">
            About
          </a>
          <a href="#programs" onClick={closeMenu} className="block py-2 px-4 hover:text-gradient">
          Programs

          </a>
          <a href="#plan" onClick={closeMenu} className="block py-2 px-4 hover:text-gradient">
            Plans
          </a>
          <a href="#stories"  onClick={closeMenu} className="block py-2 px-4 hover:text-gradient">
          Stories

          </a>
          <a href="#testimonials" onClick={closeMenu} className="block py-2 px-4 hover:text-gradient">
          Testimonials


          </a>
          <a href="#contact" onClick={closeMenu} className="block py-2 px-4 hover:text-gradient mb-4">
            Contact
          </a>
        </div>
        {/* Large screen navigation */}
        <div className="hidden md:flex space-x-4  pt-3">
        <a href="#home" className="hover:text-gradient">
            Home
          </a>

          <a href="#about" className="hover:text-gradient">
            About
          </a>
          {/* <a href="#" className="hover:text-gray-300">
            Services
          </a> */}
          <a href="#programs" className="hover:text-gradient">
          Programs
          </a>
         
          <a href="#plan" className="hover:text-gradient">
            Plans
          </a>
          <a href="#stories" className="hover:text-gradient">
          Stories
          </a>
          <a href="#testimonials" className="hover:text-gradient">
          Testimonials
          </a>
          <a href="#contact" className="hover:text-gradient">
            Contact
          </a>
<a href="https://www.facebook.com/intervistacom" target="_blank" rel="noopener noreferrer" className='hover:text-gradient'>         
<FacebookLogo size={24}  weight="fill" className='hover:text-gradient'/>
</a>

  <TwitterLogo size={24} weight="bold" />


<a href="https://www.linkedin.com/company/internvista/" target="_blank" rel="noopener noreferrer" className='hover:text-gradient'>
        <LinkedinLogo size={23}  weight="bold"  className='hover:text-gradient' />
        </a>
        </div>
      </nav>
    </>
  );
};