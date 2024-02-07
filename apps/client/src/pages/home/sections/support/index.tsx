import { t } from "@lingui/macro";
import { AddressBook, CodaLogo, FileCode, GraduationCap, Handshake, ShieldCheck } from "@phosphor-icons/react";

export const SupportSection = () => (
  <section className="services flex items-center py-10" id="programs">
      <div className="container">
        <div className="text-center lg:text-center pt-10 pb-4">
          <p>OUR INTERNSHIP PROGRAMS</p>
          <h2 className="py-2 text-3xl font-bold my-2">Explore unlimited possibilities</h2>
          <p className="para-light mb-2">Discover various internship roles, professional development opportunities, and networking programs. Your internship journey with InternVista awaits.</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2 " >
          <div className="bg-secondary  text-primary transition-colors border-2  border-white hover:border-gradient   p-6">
          <AddressBook size={48} className="text-gradient"/>
            <h4 className="py-2 text-2xl font-bold">INTERNSHIP ROLES</h4>
            <p className="para-light">Explore diverse roles in our internship programs and gain valuable experience in your field of interest.</p>
          </div>
          <div className="bg-secondary  text-primary transition-colors border-2  border-white hover:border-gradient   p-6">
          <FileCode size={48} className="text-gradient" />
            <h4 className="py-2 text-2xl font-bold">PROFESSIONAL DEVELOPMENT</h4>
            <p className="para-light">Enhance your skills and knowledge through our comprehensive professional development programs.</p>
          </div>
          <div className="bg-secondary  text-primary transition-colors border-2  border-white hover:border-gradient   p-6">
          <Handshake size={48}  className="text-gradient"/>
            <h4 className="py-2 text-2xl font-bold">NETWORKING OPPORTUNITIES</h4>
            <p className="para-light">Connect with industry professionals and expand your network through exclusive networking events.</p>
          </div>
          <div className="bg-secondary  text-primary transition-colors border-2  border-white hover:border-gradient   p-6">
          <GraduationCap size={48} className="text-gradient" />
            <h4 className="py-2 text-2xl font-bold">MENTORSHIP PROGRAM</h4>
            <p className="para-light">Receive guidance and support from experienced mentors who are dedicated to your success.</p>
          </div>
          <div className="bg-secondary  text-primary transition-colors border-2  border-white hover:border-gradient   p-6">
          <CodaLogo size={48}  className="text-gradient"/>
            <h4 className="py-2 text-2xl font-bold">PROJECT EXPERIENCE</h4>
            <p className="para-light">Get hands-on experience through real-world projects that will set you apart in your career.</p>
          </div>
          <div className="bg-secondary  text-primary transition-colors border-2  border-white hover:border-gradient   p-6">
          <ShieldCheck size={48} className="text-gradient" />
            <h4 className="py-2 text-2xl font-bold">SECURITY</h4>
            <p className="para-light">We prioritize the security and safety of our interns, providing a secure and conducive learning environment.</p>
          </div>
        </div>
      </div>
    </section>
);
