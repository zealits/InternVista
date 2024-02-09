import { t } from "@lingui/macro";
import { motion } from "framer-motion";
import { HeroCTA } from "./call-to-action";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./backgrounds/home.jpg')" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:flex h-[600px] sm:h-screen lg:items-center lg:px-12">
        <div className="mx-auto mt-16 sm:mt-10 shrink-0 lg:mx-0 lg:mt-0 lg:max-w-xl sm:pt-8">
          <div className="sm:mt-10 sm:space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-3xl font-bold tracking-tight pt-5 sm:mt-0 sm:text-4xl lg:text-6xl xl:text-6xl "
            >
              {t`Unlock Your `} {''}
              <span className="text-3xl text-gradient font-bold tracking-tight sm:text-4xl lg:text-6xl xl:text-6xl">
                {t`Potential`}
              </span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-5xl xl:text-5xl"
            >
              {t`Internship Opportunities Tailored for You`}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className=" sm:mt-3 lg:mt-6 text-md md:text-lg leading-8 "
          >
            {t`Embark on a transformative journey with InternVista Internships. Explore exciting internship roles, receive professional development, and engage in networking opportunities. Join us and shape your future success!`}
          </motion.p>

          <div className="mt-10 flex items-center gap-x-8">
            <HeroCTA />
          </div>
        </div>
      </div>
    </section>
  );
};
