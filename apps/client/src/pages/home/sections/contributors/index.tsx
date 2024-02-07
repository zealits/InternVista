import { t } from "@lingui/macro";
import { Avatar, AvatarFallback, AvatarImage, Tooltip } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import { motion } from "framer-motion";
import { useMemo } from "react";

import { useContributors } from "@/client/services/resume/contributors";
import { Clock, DeviceMobileCamera, Envelope, MapTrifold } from "@phosphor-icons/react";

export const AddressSection = () => {
  return (
    <section className="location text-light py-5 bg-secondary-accent">
      <div className="container" data-aos="zoom-in">
        <div className="flex flex-wrap">
          <div className="lg:w-3/12 flex md:w-6/12 w-full lg:p-4 my-2">
            <div className="p-2"><MapTrifold size={48} /></div>
            <div className="ms-2 my-4">
              <h6>ADDRESS</h6>
              <p>Teuku Umar ST. 1919</p>
            </div>
          </div>
          <div className="lg:w-3/12 flex md:w-6/12 w-full lg:p-4 my-2">
            <div className="p-2 "><DeviceMobileCamera size={48} /></div>
            <div className="ms-2 my-4">
              <h6>CALL FOR QUERY</h6>
              <p>(800) 265 216 2020</p>
            </div>
          </div>
          <div className="lg:w-3/12 flex md:w-6/12 w-full lg:p-4 my-2">
            <div className="p-2"><Envelope size={48}/></div>
            <div className="ms-2 my-4">
              <h6>SEND US MESSAGE</h6>
              <p>infodemofile@example.com</p>
            </div>
          </div>
          <div className="lg:w-3/12 flex md:w-6/12 w-full lg:p-4 my-2">
            <div className="p-2"><Clock size={48} /></div>
            <div className="ms-2 my-4">
              <h6>OPENING HOURS</h6>
              <p>09:00 AM - 18:00 PM</p>
            </div>
          </div>
        </div> {/* end of flex wrap */}
      </div> {/* end of container */}
    </section>
  );
};
