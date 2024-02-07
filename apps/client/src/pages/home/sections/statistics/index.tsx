import { t } from "@lingui/macro";
import { Calendar, Clock, Gear, Headset, Person } from "@phosphor-icons/react";


export const StatisticsSection = () => {
  return (
    <section id="statistics" className="relative  ">
      <div className="flex  flex-col lg:flex-row  text-center ">
        {/* First div */}
       <div className=" w-full  lg-w-1/3  py-10 bg-secondary-accent">
       <div className="   flex flex-col justify-center px-2 border-3  border-white ">
         <div className="flex justify-center">
         <Person size={48} className="mb-4 text-gradient " />
         </div>
          <h1 className="text-2xl font-semibold mb-4">{t`Apply Now for Internships`}</h1>
          <p className="text-md px-2">{t`Become a part of our internship program and gain hands-on experience. Apply now to kickstart your career journey with InternVista Internships.`}</p>
        </div>
       </div>
        {/* Second div */}
        <div className="w-full  lg-w-1/3 py-10 ">
       <div className="   flex flex-col justify-center px-2 border-3  border-white ">
         <div className="flex justify-center">
         <Clock size={48} className="mb-4 text-gradient " />
         </div>
          <h1 className="text-2xl font-semibold mb-4">{t`99% Intern Success Rate`}</h1>
          <p className="text-md px-2">{t`Our internship programs boast a remarkable 99% success rate. We ensure our interns are well-prepared for the challenges of their future careers.`}</p>
        </div>
       </div>
        {/* Third div */}
        <div className=" w-full  lg-w-1/3 py-10 bg-secondary-accent">
       <div className="   flex flex-col justify-center px-2 border-3  border-white ">
         <div className="flex justify-center">
         <Headset size={48} className="mb-4 text-gradient " />
         </div>
          <h1 className="text-2xl font-semibold mb-4">{t`24/7 Mentor Support`}</h1>
          <p className="text-md px-2">{t`Feel supported throughout your internship with our 24/7 mentorship program. Our dedicated mentors are here to guide you every step of the way.`}</p>
        </div>
       </div>
      </div>
    </section>
  );
};