import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Helmet } from "react-helmet-async";
import { Separator } from "@reactive-resume/ui";
import { AddressSection } from "./sections/contributors";
import { ContactSection,} from "./sections/faq";
import { FeaturesSection } from "./sections/features";
import { HeroSection } from "./sections/hero";
import { LogoCloudSection } from "./sections/logo-cloud";
import { StatisticsSection } from "./sections/statistics";
import { SupportSection } from "./sections/support";
import { TemplatesSection } from "./sections/templates";
import { TestimonialsSection } from "./sections/testimonials";

export const HomePage = () => {
  const { i18n } = useLingui();

  return (
    <main className="relative isolate bg-background">
      <Helmet prioritizeSeoTags>
        <html lang={i18n.locale} />

        <title>
          {t`InternVista`} - {t`At InternVista Internships, we are committed to shaping future leaders. Our programs focus on providing the skills and knowledge necessary for success.`}
        </title>

        <meta
          name="description"
          content="At InternVista Internships, we are committed to shaping future leaders. Our programs focus on providing the skills and knowledge necessary for success."
        />
      </Helmet>

      <HeroSection />
      
      <StatisticsSection />
      <Separator />
      <FeaturesSection />
      <Separator />
      <SupportSection />
      <Separator />
      <TemplatesSection />
      <Separator />
      <LogoCloudSection />
      <Separator />
      <TestimonialsSection />
      <Separator />
      <ContactSection />
      {/* <AddressSection /> */}
    </main>
  );
};
