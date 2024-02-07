import { t } from "@lingui/macro";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface Testimonial {
  text: string;
  imageSrc: string;
  name: string;
  position: string;
}

export const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Sample testimonial data
  const testimonials: Testimonial[] = [
    {
      text: "As I journeyed through InternVista, it became my guiding light, illuminating the path to professional triumph. The personalized coaching and unwavering support were nothing short of transformative. My heartfelt appreciation for the profound insights that have shaped my career. InternVista is more than a service; it's a partner in success, and I stand testament to its impact ",
      imageSrc: "https://themewagon.github.io/mirko/assets/images/testimonial-3.jpg",
      name: "Nisha Sharma",
      position: "Best regards, "
    },
    {
      text: "InternVista has been my guiding light throughout my internship journey. The personalized coaching and unwavering support from my advisors and mentors, have truly made a difference. I am profoundly grateful for the knowledge and insights that have shaped my career path. InternVista is not just a coaching service; it's a gateway to professional success, and I am living proof of its impact.",
      imageSrc: "https://themewagon.github.io/mirko/assets/images/testimonial-3.jpg",
      name: "Prabhat Patil",
      position: "Kind regards, "
    },
    
    {
      text: "My internship experience with InternVista has been remarkable. The tailored guidance and mentorship have been instrumental in my career development. I owe a great deal of my achievements to the dedicated support and expertise provided by InternVista. It's more than just a service; it's a catalyst for professional growth, and I am immensely thankful for the opportunity.",
      imageSrc: "https://themewagon.github.io/mirko/assets/images/testimonial-3.jpg",
      name: "Bhushan Pai",
      position: "Warm regards, "
    },
   
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
  };

  return (
    <section id="testimonials" className="container relative space-y-6 sm:space-y-12 py-24 sm:py-32">
      <div className="space-y-3 text-center">
        <p>TESTIMONIALS</p>
        <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl  ">{t`What Our Interns Say`}</h1>
        <p className="mx-auto max-w-3xl leading-relaxed">
          Explore testimonials from our interns who have benefited from InternVista Internships and share their experiences.
        </p>
      </div>

      <div className="relative  flex flex-col items-center">
        <motion.div
          className="w-full bg-secondary  text-primary transition-colors border border-2 border-gradient sm:w-2/3 lg:w-2/3 px-4  py-8   "
          key={currentSlide}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base">{testimonials[currentSlide].text}</p>
          {/* <p className="text-md mt-2"><i>{testimonials[currentSlide].position}</i></p> */}
          <h6 className="text-lg mt-2 font-semibold">{testimonials[currentSlide].name}</h6>
          {/* <div className="flex pt-4">
            <div>
              <img className="w-12 h-12 rounded-full" src={testimonials[currentSlide].imageSrc} alt="testimonial" />
            </div>
            <div className="ms-3">
              {/* <h6 className="text-lg font-semibold">{testimonials[currentSlide].name}</h6> */}
              {/* <p className="text-sm">{testimonials[currentSlide].position}</p> *
            </div>
          </div> */}
        </motion.div>

        <div className="absolute top-0 -left-8  flex items-center h-full" onClick={prevSlide}>
          <CaretLeft className="text-3xl cursor-pointer" />
        </div>
        <div className="absolute top-0 -right-8 flex items-center h-full" onClick={nextSlide}>
          <CaretRight className="text-3xl cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;