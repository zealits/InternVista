import { t } from "@lingui/macro";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export const EmailPage = () => (
  <>
    <Helmet>
      <title>
        {t`Get Mail`} - {t`InternVista`}
      </title>
    </Helmet>

    <div className="max-w-2xl space-y-4">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold tracking-tight"
      >
        {t`Get Mail`}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-center items-center h-screen"
      >
        <div className="text-4xl items-center font-bold">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Coming Soon
          </motion.h1>
        </div>
      </motion.div>
    </div>
  </>
);
