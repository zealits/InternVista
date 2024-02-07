import { t } from "@lingui/macro";
import { CaretCircleDoubleRight } from "@phosphor-icons/react";
import { HeroCTA } from "./call";

export const TemplatesSection = () => (
  <section id="plan" className="relative py-20 sm:py-30">
    <div className="container">
      <div className="text-center lg:text-center pb-4">
        <p>OUR PROGRAM PLANS</p>
        <h2 className="py-2 text-3xl font-bold my-2">Explore unlimited possibilities</h2>
        <p className="para-light mb-2">Choose from our range of internship plans designed to meet your unique career goals and aspirations.</p>
      </div>
      <div className="flex justify-center items-center gap-4  lg:gap-0 flex-col lg:flex-row">
        <div className="bg-secondary  text-primary transition-colors border-2  border-white hover:border-gradient    w-full lg:w-1/3 px-2 py-5 mx-4">
          <h1 className="text-2xl font-semibold mb-2 flex gap-2">BASIC INTERNSHIP</h1>
          <p className="text-sm align-center">Start your journey with our foundational internship plan, providing essential skills and experiences.</p>
        </div>
        <div className="bg-secondary  text-primary transition-colors border-2  border-white hover:border-gradient    w-full lg:w-1/3 px-2 py-5 mx-4">
          <h1 className="text-2xl font-semibold mb-2 flex gap-2">INTERMEDIATE INTERNSHIP</h1>
          <p className="text-sm align-center">Take your skills to the next level with our intermediate internship plan, offering advanced training and development.</p>
        </div>
        <div className="bg-secondary  text-primary transition-colors border-2  border-white hover:border-gradient    w-full lg:w-1/3 px-2 py-5 mx-4">
          <h1 className="text-2xl font-semibold mb-2 flex gap-2">ADVANCED INTERNSHIP</h1>
          <p className="text-sm align-center">Reach new heights with our advanced internship plan, tailored for those seeking a challenging and rewarding experience.</p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <HeroCTA />
      </div>
    </div>
  </section>
);
