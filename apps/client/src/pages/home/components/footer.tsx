import { t } from "@lingui/macro";
import { Separator } from "@reactive-resume/ui";

import { Copyright } from "@/client/components/copyright";
import { LocaleSwitch } from "@/client/components/locale-switch";
import { ThemeSwitch } from "@/client/components/theme-switch";
import { CaretRight, Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";

export const Footer = () => (
  <footer className="bg-background">
    <Separator />

    <div className="container grid gap-10 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="flex flex-col gap-y-2 my-4">
        {/* <Logo size={96} className="-ml-2" /> */}
        <a href="#home" >
          <div className="font-semibold text-2xl md:text-3xl">InternVista</div>
        </a>
        <p className="my-2">
          {t`Unlock your potential with InternVista Internships. Join us and shape your future success.`}
        </p>

        <div className="flex gap-3 ">
        <a href="https://www.facebook.com/intervistacom" target="_blank" rel="noopener noreferrer" className='hover:text-gradient'>
        <FacebookLogo size={32} weight="bold" className="hover:text-gradient"  />
        </a>
        <TwitterLogo size={32} weight="bold" className="hover:text-gradient"  />
        <InstagramLogo size={32}  weight="bold"  className="hover:text-gradient"  />
        <a href="https://www.linkedin.com/company/internvista/" target="_blank" rel="noopener noreferrer" className='hover:text-gradient'>
        <LinkedinLogo size={32}  weight="bold"  className="hover:text-gradient"  />
        </a>
        </div>
      </div>

      
      <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 py-4 py-md-5">
      <div className="font-semibold text-2xl md:text-3xl">Quick Links</div>
        <div className="d-flex flex align-items-center py-2 my-2">
        <CaretRight size={18} weight="fill"  />
          <a href="#about" className="ms-3 hover:text-gray-300 hover:text-gradient transition duration-300">About</a>
        </div>
        <div className="d-flex flex align-items-center py-2 my-2">
        <CaretRight size={18} weight="fill" className="hover:text-gradient"  />
          <a href="#programs" className="ms-3 hover:text-gray-300  hover:text-gradient transition duration-300">Programs</a>
        </div>
        <div className="d-flex flex align-items-center py-2 my-2">
        <CaretRight size={18} weight="fill"  className="hover:text-gradient" />
          <a href="#plan" className="ms-3 hover:text-gray-300 hover:text-gradient transition duration-300">Plans</a>
        </div>
        <div className="d-flex flex align-items-center py-2 my-2">
        <CaretRight size={18} weight="fill" className="hover:text-gradient" />
          <a href="#contact" className="ms-3 hover:text-gray-300  hover:text-gradient transition duration-300">Contact</a>
        </div>
      </div>
     

      {/* Useful Links Section 
      <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 py-4 py-md-5 ">
      <div className="font-medium text-3xl">Useful Links</div>
      <div className="d-flex flex align-items-center py-2 my-2">
      <CaretRight size={18} weight="fill" />
          <a href="privacy.html" className="ms-3 hover:text-gray-300 transition duration-300">Privacy</a>
        </div>
        <div className="d-flex flex align-items-center py-2 my-2">
        <CaretRight size={18} weight="fill" />
          <a href="terms.html" className="ms-3 hover:text-gray-300 transition duration-300">Terms</a>
        </div>
        <div className="d-flex flex align-items-center py-2 my-2">
        <CaretRight size={18} weight="fill" />
          <a href="#your-link" className="ms-3 hover:text-gray-300 transition duration-300">Disclaimer</a>
        </div>
        <div className="d-flex flex align-items-center py-2 my-2">
        <CaretRight size={18} weight="fill" />
          <a href="#your-link" className="ms-3 hover:text-gray-300 transition duration-300">FAQ</a>
        </div>
      </div>
      */}

      {/* Newsletter Section 
      <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 py-4 py-md-5">
      <div className="font-medium text-3xl">Newsletter</div>
        <p className="py-3 my-2">Stay connected with InternVista Internships. Subscribe to our newsletter for the latest updates and industry news.</p>
        <div className="d-flex align-items-center">
          <div className="input-group flex  mb-3 my-2">
            <input type="text" className="form-control p-2 sm:w-3/5" placeholder="Enter Email" aria-label="Recipient's email" />
            <button className="btn-secondary border py-2 px-3 border-white hover:bg-gray-300">
            <Envelope size={22} className="hover:text-black" />
            </button>
          </div>
        </div>
      </div>
      */}

      {/* DigitalOcean Badge */}
      {/* <div className="relative col-start-4 flex flex-col items-end justify-end">

        {/* Locale and Theme Switch */}
        <div className="absolute bottom-0 right-0 lg:space-x-2">
          {/* <LocaleSwitch />
          <ThemeSwitch /> */}
        </div>
      {/* </div> */} 
    </div>

    
<div className="bottom py-2 bg-secondary-accent text-light">
  <div className="container d-flex flex-col lg:flex-row ">
    <div className="lg:mb-0">
      <p className="mb-0 ">Copyright © InternVista 2024</p>
      {/* <p className="mb-0 my-2">Distributed by: <a href="https://themewagon.com/">Themewagon</a></p> */}
    </div>
  </div>
</div>


  </footer>
);
