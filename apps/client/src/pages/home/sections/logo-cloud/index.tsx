import { t, Trans } from "@lingui/macro";
import { SealCheck, ThumbsUp, Trophy, Users, UsersFour } from "@phosphor-icons/react";
import { buttonVariants } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";


export const LogoCloudSection = () => (
  <section className="work flex flex-col md:flex-row-reverse bg-secondary-accent items-center py-5" id="stories">
    <div className="text-light">
      <div className="w-full flex lg:flex-row flex-col">
        <div className="items-center w-full lg:w-1/2  ">
          <img className="object-cover w-full" src="./images/work.jpg" alt="work" />
        </div>
        <div className="flex w-full lg:text-left sm:w-full text-center md:items-center md:w-full lg:w-1/2 px-4">
          <div className="row">
            <div className="text-lg-start py-4 pt-lg-0">
              <p>OUR SUCCESS STORIES</p>
              <h2 className="py-4 text-3xl font-bold">Discover success stories</h2>
              <p className="para-light">Explore the success stories of our interns who have completed our programs, received industry recognitions, and contributed to our positive feedback.</p>
            </div>
            <div className="bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 py-2">
              <div className="bg-transparent">
                <Trophy size={32} className="text-gradient" />
                <h4 className="py-2 text-lg font-bold">INTERN SUCCESS STORIES</h4>
                <p className="para-light text-sm">Learn about the achievements of our interns who have successfully transitioned from our programs to impactful careers.</p>
              </div>
              <div className="bg-transparent">
                <SealCheck size={32} className="text-gradient" />
                <h4 className="py-2 text-lg font-bold">INDUSTRY RECOGNITIONS</h4>
                <p className="para-light text-sm">Celebrate the industry recognitions and awards earned by our interns for their outstanding contributions.</p>
              </div>
              <div className="bg-transparent">
                <Users size={32} className="text-gradient" />
                <h4 className="py-2 text-lg font-bold">INTERN ALUMNI</h4>
                <p className="para-light text-sm">Join our growing community of intern alumni and stay connected with peers who have embarked on similar journeys.</p>
              </div>
              <div className="bg-transparent">
                <ThumbsUp size={32} className="text-gradient" />
                <h4 className="py-2 text-lg font-bold">POSITIVE FEEDBACKS</h4>
                <p className="para-light text-sm">Read the positive feedback from interns who have experienced our programs and felt the positive impact on their careers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
