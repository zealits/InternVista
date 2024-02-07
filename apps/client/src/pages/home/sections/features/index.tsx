import { t } from "@lingui/macro";


export const FeaturesSection = () => {
  return (
    <section id="about" className="relative lg:bg-secondary-accent bg-black py-16 sm:py-10">
      <div className="container flex flex-col md:flex-row items-center justify-center">
        <div className="w-full lg:w-3/5 flex flex-col justify-center space-y-3 leading-loose">
          <div className="text-xl font-bold">{t`ABOUT US`}</div>
          <div className="text-4xl font-bold">{t`Shaping Future Leaders.`}</div>
          <div className="max-w-4xl text-base leading-relaxed">
            {t`At InternVista Internships, we are committed to shaping future leaders. Our programs focus on providing the skills and knowledge necessary for success.`}
          </div>
        </div>
        <div className="w-full md:w-2/5 flex hidden  lg:block justify-center items-center">
          <img src="./images/about (1).jpg" alt="About us Image" />
        </div>
      </div>
    </section>
  );
};